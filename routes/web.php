<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\BuktiPendaftaranController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [HomeController::class, 'create'])
    ->name('home.create');

Route::post('/', [HomeController::class, 'store'])
    ->name('home.store');

Route::get('bukti-pendaftaran/{buktiPendaftaran}', [BuktiPendaftaranController::class, 'stream'])
    ->name('pdf.stream');

require __DIR__ . '/auth.php';
