<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'session_id',
        'status',
        'booking_data',
        'email'
    ];

    protected $casts = [
        'booking_data' => 'array',
    ];
}
