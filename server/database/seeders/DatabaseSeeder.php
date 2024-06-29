<?php

namespace Database\Seeders;

use App\Models\Car;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        Car::create(
            [

                'title' => 'Bentley Bentayga',
                'image' => 'car1',
                'brand' => 'Mercedes',
                'passengers' => 2,
                'model' => 'Chiron',
                'year' => 2020,
                'luggages' => 2,
                'price_per_km' => 70,
                'price_per_hour' => 70
            ],
            [

                'title' => 'Mercedes Benz S Klasse',
                'image' => 'car2',
                'brand' => 'Mercedes',
                'passengers' => 2,
                'model' => 'Chiron',
                'year' => 2020,
                'luggages' => 2,
                'price_per_km' => 80,
                'price_per_hour' => 70
            ],
            [

                'title' => 'Mercedes Benz S Klasse',
                'image' => 'car3',
                'brand' => 'Mercedes',
                'passengers' => 2,
                'model' => 'Chiron',
                'year' => 2020,
                'luggages' => 2,
                'price_per_km' => 80,
                'price_per_hour' => 70
            ],
            [

                'title' => 'Bentley Bentayga',
                'image' => 'car4',
                'brand' => 'Mercedes',
                'passengers' => 2,
                'model' => 'Chiron',
                'year' => 2020,
                'luggages' => 2,
                'price_per_km' => 70,
                'price_per_hour' => 70
            ]
        );
    }
}
