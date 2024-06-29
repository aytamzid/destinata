<?php

namespace App\Http\Controllers;

use App\Mail\ConfirmationMail;
use App\Mail\NotificationMail;
use App\Models\Booking;
use App\Models\Car;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as Psr7Request;
use Illuminate\Http\Request;
use Stripe\Checkout\Session as CheckoutSession;
use Stripe\Stripe;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        // info($request->bookingData["rideDetails"]["pickUpLocation"]["formatted_address"]);
        // dd();
        // info($request->all());s





        $success_url =  strval($request->success_url);
        $cancel_url =  strval($request->cancel_url);
        $bookPerKM = $request->bookingData["rideDetails"]["bookingPerKM"];
        $pickupLocationID = $request->bookingData["rideDetails"]["pickUpLocation"]["place_id"];
        if (isset($request->bookingData["rideDetails"]["bookingHour"])) {
            $hourInString = $request->bookingData["rideDetails"]["bookingHour"];
            $hour = intval($hourInString);
        }
        $carID = $request->bookingData["carInfo"]["id"];
        $carData = Car::findOrFail($carID);
        $title = $carData->title;


        // get api from env
        $api = env('DISTANCE_MATRIX_API');



        if ($bookPerKM) {

            $dropOffLocationID = $request->bookingData["rideDetails"]["dropOffLocation"]["place_id"];
            $client = new Client();
            $httpRequest = new Psr7Request('GET', "https://maps.googleapis.com/maps/api/distancematrix/json?destinations=place_id:" . $dropOffLocationID . "&origins=place_id:" . $pickupLocationID . "&key=" . $api);
            $res = $client->sendAsync($httpRequest)->wait();
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
            $price = $carData->price_per_hour * $hour;
        }
        if ($price < 150) {
            $price = 150;
        }
        // make price in cents
        $price = $price * 100;


        $data = [
            'pick-up' => $request->bookingData["rideDetails"]["pickUpLocation"]["formatted_address"],
            'drop-off' => $request->bookingData["rideDetails"]["dropOffLocation"] ? $request->bookingData["rideDetails"]["dropOffLocation"]["formatted_address"] : null,
            'total_hour' => $request->bookingData["rideDetails"]["bookingHour"],
            'time' => $request->bookingData["rideDetails"]["time"],
            'date' =>Carbon::parse($request->bookingData["rideDetails"]["date"])->format('Y-m-d'),
            'title' => $request->bookingData["carInfo"]["title"],
            'bookingPerKm' => $request->bookingData["rideDetails"]["bookingPerKM"],
            'total_rent' => '$' . number_format($price, 2),
            'name' => $request->bookingData["passengerDetails"]["firstName"] . " " . $request->bookingData["passengerDetails"]["lastName"],
            'email' => $request->bookingData["passengerDetails"]["email"],
            'phone' => $request->bookingData["passengerDetails"]["phone"],
            'baggage' => $request->bookingData["passengerDetails"]["baggage"],
            'passenger' => $request->bookingData["passengerDetails"]["passenger"],
            'child' => $request->bookingData["passengerDetails"]["child"]
        ];

        Stripe::setApiKey(env('STRIPE_SECRET'));

        $session = CheckoutSession::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $title . ' - Destinata',
                    ],
                    'unit_amount' => $price,
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'success_url' => $success_url,
            'cancel_url' => $cancel_url,
        ]);



        Booking::create([
            'session_id' => $session->id,
            'status' => 'pending',
            'email' => $request->bookingData["passengerDetails"]["email"],
            'booking_data' => json_encode($data)
        ]);
        // dd($data);
        return response()->json(['id' => $session->id]);
    }

    public function handleWebhook(Request $request)
    {
        Stripe::setApiKey(env('STRIPE_SECRET'));

        $payload = @file_get_contents('php://input');
        $sigHeader = $request->header('Stripe-Signature');
        $endpointSecret = env('STRIPE_WEBHOOK_SECRET');

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sigHeader,
                $endpointSecret
            );
        } catch (\UnexpectedValueException $e) {
            return response()->json(['error' => 'Invalid payload'], 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            return response()->json(['error' => 'Invalid signature'], 400);
        }

        switch ($event->type) {
            case 'checkout.session.completed':
                $session = $event->data->object;
                $booking = Booking::where('session_id', $session->id)->first();

            if ($booking) {
                // Update the booking status to 'paid'
                Mail::to($booking->email)->send(new ConfirmationMail($session));
                Mail::to(env('ADMIN_MAIL_ADDRESS'))->send(new NotificationMail($session));
                $booking->status = 'paid';
                $booking->save();

            } else {
                Log::error('Booking not found for session ID: ' . $session->id);
            }

                break;
            default:
                return response()->json(['error' => 'Unhandled event type'], 400);
        }

        return response()->json(['status' => 'success'], 200);
    }

    public function test()
    {
        // $data = [
        //     'name' => 'John Doe',
        //     'email' => 'aytamzid@gmail.com',
        //     'message' => 'This is a test email'
        // ];
        // Mail::to('aytamzid@gmail.com')->send(new ConfirmationMail($data));
        // return response()->json(['message' => 'Payment controller is working']);
    }
}
