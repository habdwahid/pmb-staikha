<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\MahasiswaData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class KartuKeluargaController extends Controller
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
    public function show(MahasiswaData $mahasiswaData)
    {
        return Storage::download($mahasiswaData->kartu_keluarga);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(MahasiswaData $mahasiswaData)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MahasiswaData $mahasiswaData)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MahasiswaData $mahasiswaData)
    {
        //
    }
}
