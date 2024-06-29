<?php

namespace App\Http\Controllers;

use App\Models\Car;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Illuminate\Http\Request;

class CarController extends Controller
{
    public function index()
    {
        $data = Car::all();
        return response()->json($data);
    }

    public function update(Request $request, $id)
    {
        $car = Car::findOrFail($id);
        $car->update(
            [
                'price_per_hour' => $request->price_per_hour,
                'price_per_km' => $request->price_per_km,
            ]
        );
        return response()->json("Price updated successfully");
    }

    public function getDistance(Request $request)
    {
        $bookPerKM = $request->bookingData["rideDetails"]["bookingPerKM"];
        $pickupLocationID = $request->bookingData["rideDetails"]["pickUpLocation"]["place_id"];
        if (isset($request->bookingData["rideDetails"]["bookingHour"])) {
            $hourInString = $request->bookingData["rideDetails"]["bookingHour"];
            $hour = intval($hourInString);
        }
        $carID = $request->bookingData["carInfo"]["id"];
        $carData = Car::findOrFail($carID);

        $api = env('DISTANCE_MATRIX_API');

        if ($bookPerKM) {

            $dropOffLocationID = $request->bookingData["rideDetails"]["dropOffLocation"]["place_id"];
            $client = new Client();
            $request = new Psr7Request('GET', "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=place_id:" . $dropOffLocationID . "&origins=place_id:" . $pickupLocationID . "&key=" . $api);
            $res = $client->sendAsync($request)->wait();
            // return $res->getBody();
            $responseBody = $res->getBody();
            $responseJson = json_decode($responseBody, true);

            if (isset($responseJson['rows'][0]['elements'][0]['distance']['value'])) {
                $distance = $responseJson['rows'][0]['elements'][0]['distance']['value'];
                // meter to km conversion with only int value
                $distance = round($distance / 1000);
                $price = $distance * $carData->price_per_km;
            }
        } else {
            // info('Hourly booking');
            $distance = 0;
            $price = $carData->price_per_hour * $hour;
        }
        if ($price < 150) {
            $price = 150;
        }
        return response()->json(['distance' => $distance, 'price' => $price]);

    }
}
