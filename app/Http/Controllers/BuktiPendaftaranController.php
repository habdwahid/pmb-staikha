<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use App\Models\BuktiPendaftaran;

class BuktiPendaftaranController extends Controller
{
    /**
     * Display the specified resource.
     */
    public function stream(BuktiPendaftaran $buktiPendaftaran)
    {
        $pdf = Pdf::loadView('pdf', compact(
            'buktiPendaftaran',
        ));

        return $pdf->stream();
    }
}
