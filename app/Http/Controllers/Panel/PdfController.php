<?php

namespace App\Http\Controllers\Panel;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\BuktiPendaftaran;
use App\Http\Controllers\Controller;

class PdfController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function show(BuktiPendaftaran $buktiPendaftaran)
    {
        $pdf = Pdf::loadView('pdf', compact(
            'buktiPendaftaran',
        ));

        return $pdf->stream(str($buktiPendaftaran->bukti_pendaftaran)->after('bukti pendaftaran/'));
    }
}
