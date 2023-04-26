<?php

namespace App\Http\Controllers\Panel;

use App\Models\Nisn;
use Inertia\Response;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MahasiswaController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        public Mahasiswa $mahasiswa,
    ) {
        // 
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $mahasiswa = $this->mahasiswa->with([
            'mahasiswa_data' => [
                'nisn',
            ]
        ])->latest()->get();

        return inertia('Panel/Mahasiswa/MahasiswaIndex', [
            'mahasiswa' => $mahasiswa,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mahasiswa $mahasiswa): Response
    {
        return inertia('Panel/Mahasiswa/MahasiswaShow', [
            'mahasiswa' => $mahasiswa->with([
                'ayah' => [
                    'pendidikan',
                ],
                'bukti_pendaftaran',
                'ibu' => [
                    'pendidikan',
                ],
                'mahasiswa_data' => [
                    'agama',
                    'informasi',
                    'jenis_kelamin',
                    'nik',
                    'nisn',
                    'phone',
                    'program_studi'
                ]
            ])->get(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mahasiswa $mahasiswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mahasiswa $mahasiswa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mahasiswa $mahasiswa)
    {
        //
    }
}
