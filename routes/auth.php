<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;

/*
|--------------------------------------------------------------------------
| Auth Routes
|--------------------------------------------------------------------------
|
| Here is where you can register auth routes for your application.
|
*/

Route::middleware('guest')
  ->group(function () {
    Route::get('login', [LoginController::class, 'create'])
      ->name('login');

    Route::post('login', [LoginController::class, 'store']);
  });

Route::middleware('auth')
  ->group(function () {
    Route::post('logout', [LoginController::class, 'destroy'])
      ->name('logout');
  });
