<?php

namespace App\Http\Controllers\Panel;

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
        $mahasiswa = $this->mahasiswa
            ->query()
            ->when(request('search'), function ($query) {
                $query->where('nama_lengkap', 'LIKE', '%' . request('search') . '%');
            })
            ->with([
                'mahasiswa_data' => [
                    'program_studi',
                ],
                'nisn',
            ])
            ->paginate(10);

        return inertia('Panel/Mahasiswa/MahasiswaIndex', [
            'mahasiswa' => $mahasiswa,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Mahasiswa $mahasiswa): Response
    {
        $mahasiswa = $this->mahasiswa
            ->where('id', $mahasiswa->id)
            ->with([
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
                    'program_studi',
                ],
                'nik',
                'nisn',
                'phone',
            ])
            ->first();

        return inertia('Panel/Mahasiswa/MahasiswaShow', [
            'mahasiswa' => $mahasiswa,
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
