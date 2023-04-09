<?php

namespace App\Observers\Register;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\BuktiPendaftaran;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Notification;
use App\Notifications\Register\SendEmailBuktiPendaftaran;

class PdfObserver
{
    /**
     * Handle the BuktiPendaftaran "created" event.
     */
    public function created(BuktiPendaftaran $buktiPendaftaran)
    {
        $pdf = Pdf::loadView('pdf', compact(
            'buktiPendaftaran',
        ));

        Storage::put($buktiPendaftaran->bukti_pendaftaran, $pdf->download(str($buktiPendaftaran->bukti_pendaftaran)->after('bukti pendaftaran/'))->getOriginalContent());

        $user = $buktiPendaftaran->mahasiswa;

        Notification::send($user, new SendEmailBuktiPendaftaran($buktiPendaftaran));
    }

    /**
     * Handle the BuktiPendaftaran "deleted" event.
     */
    public function deleted(BuktiPendaftaran $buktiPendaftaran): void
    {
        Storage::delete($buktiPendaftaran->bukti_pendaftaran);
    }
}
