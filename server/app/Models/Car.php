<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'image',
        'brand',
        'passengers',
        'model',
        'year',
        'luggages',
        'price_per_km',
        'price_per_hour',
    ];


}
