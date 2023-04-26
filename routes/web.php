<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\Panel\DashboardController;
use App\Http\Controllers\Panel\KartuKeluargaController;
use App\Http\Controllers\Panel\MahasiswaController;
use App\Http\Controllers\Panel\PdfController;

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

Route::middleware('auth')
    ->as('panel.')
    ->prefix('panel/')
    ->group(function () {
        Route::get('/', function () {
            return to_route('panel.dashboard.index');
        });

        Route::get('dashboard', [DashboardController::class, 'index'])
            ->name('dashboard.index');

        Route::get('kartu-keluarga/{mahasiswaData}', [KartuKeluargaController::class, 'show'])
            ->name('kartu-keluarga.show');

        Route::controller(MahasiswaController::class)
            ->group(function () {
                Route::get('mahasiswa', 'index')
                    ->name('mahasiswa.index');

                Route::get('mahasiswa/{mahasiswa}', 'show')
                    ->name('mahasiswa.show');
            });

        Route::get('bukti-pendaftaran/{buktiPendaftaran}', [PdfController::class, 'show'])
            ->name('bukti-pendaftaran.show');
    });

require __DIR__ . '/auth.php';
