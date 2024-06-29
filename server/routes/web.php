<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\PaymentController;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return "Destinata is running!";
});
Route::get('/test', [PaymentController::class, 'test']);

require __DIR__ . '/auth.php';
