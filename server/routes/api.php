<?php

use App\Http\Controllers\CarController;
use App\Http\Controllers\PaymentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/cars', [CarController::class, 'index'])->name('cars.index');
Route::post('/get-distance', [CarController::class, 'getDistance']);


Route::post('/create-payment-intent', [PaymentController::class, 'createPaymentIntent']);
Route::post('/stripe/webhook', [PaymentController::class, 'handleWebhook']);

Route::middleware(['auth:sanctum'])->post('/car/update/{id}', [CarController::class, 'update'])->name('car.update');
