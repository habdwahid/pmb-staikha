<?php

namespace App\Http\Controllers;

use App\Models\Agama;
use Inertia\Response;
use App\Models\Informasi;
use App\Models\Pendidikan;
use App\Models\JenisKelamin;
use App\Models\ProgramStudi;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\RegisterRequest;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        public Agama $agama,
        public Informasi $informasi,
        public JenisKelamin $jenisKelamin,
        public Pendidikan $pendidikan,
        public ProgramStudi $programStudi,
    ) {
        // 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $agama = $this->agama
            ->orderBy('agama')
            ->get();
        $informasi = $this->informasi
            ->orderBy('informasi')
            ->get();
        $jenis_kelamin = $this->jenisKelamin
            ->orderBy('jenis_kelamin')
            ->get();
        $pendidikan = $this->pendidikan
            ->orderBy('pendidikan')
            ->get();
        $program_studi = $this->programStudi
            ->orderBy('program_studi')
            ->get();

        return inertia('Home', [
            'agama' => $agama,
            'informasi' => $informasi,
            'jenisKelamin' => $jenis_kelamin,
            'pendidikan' => $pendidikan,
            'programStudi' => $program_studi,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RegisterRequest $request): RedirectResponse
    {
        $request->store();

        return back()
            ->with([
                'status' => 'Terima kasih telah mendaftar. Cek email Anda untuk mencetak tanda bukti pendaftaran',
            ]);
    }
}
