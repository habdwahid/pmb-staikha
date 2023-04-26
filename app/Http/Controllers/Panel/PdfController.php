<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\BuktiPendaftaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PdfController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(BuktiPendaftaran $buktiPendaftaran)
    {
        return Storage::download($buktiPendaftaran->bukti_pendaftaran);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BuktiPendaftaran $buktiPendaftaran)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, BuktiPendaftaran $buktiPendaftaran)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BuktiPendaftaran $buktiPendaftaran)
    {
        //
    }
}
