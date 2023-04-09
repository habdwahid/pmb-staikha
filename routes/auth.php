<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\PasswordResetLinkController;

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

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
      ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
      ->name('password.email');
  });

Route::middleware('auth')
  ->group(function () {
    Route::post('logout', [LoginController::class, 'destroy'])
      ->name('logout');
  });
