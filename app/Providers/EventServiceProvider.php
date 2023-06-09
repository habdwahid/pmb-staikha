<?php

namespace App\Providers;

use App\Models\Mahasiswa;
use App\Models\MahasiswaData;
use App\Models\BuktiPendaftaran;
use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use App\Observers\Register\IbuObserver;
use App\Observers\Register\NikObserver;
use App\Observers\Register\PdfObserver;
use App\Observers\Register\AyahObserver;
use App\Observers\Register\NisnObserver;
use App\Observers\Register\PhoneObserver;
use App\Observers\Register\MahasiswaDataObserver;
use App\Observers\Register\BuktiPendaftaranObserver;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        Mahasiswa::observe([
            AyahObserver::class,
            IbuObserver::class,
            MahasiswaDataObserver::class,
            BuktiPendaftaranObserver::class,
        ]);

        MahasiswaData::observe([
            NikObserver::class,
            NisnObserver::class,
            PhoneObserver::class,
        ]);

        BuktiPendaftaran::observe([
            PdfObserver::class,
        ]);
    }

    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
