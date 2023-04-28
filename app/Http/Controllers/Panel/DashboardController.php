<?php

namespace App\Http\Controllers\Panel;

use Inertia\Response;
use App\Models\Informasi;
use App\Models\Mahasiswa;
use App\Models\JenisKelamin;
use App\Models\MahasiswaData;
use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct(
        public Informasi $informasi,
        public JenisKelamin $jenisKelamin,
        public Mahasiswa $mahasiswa,
        public MahasiswaData $mahasiswaData,
    ) {
        // 
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $brosur = $this->informasi
            ->where('informasi', 'Brosur')
            ->first();
        $keluarga = $this->informasi
            ->where('informasi', 'Keluarga')
            ->first();
        $lainnya = $this->informasi
            ->where('informasi', 'Lainnya')
            ->first();
        $mediaSosial = $this->informasi
            ->where('informasi', 'Media Sosial')
            ->first();
        $poster = $this->informasi
            ->where('informasi', 'Poster')
            ->first();
        $sekolah = $this->informasi
            ->where('informasi', 'Sekolah')
            ->first();
        $spanduk = $this->informasi
            ->where('informasi', 'Spanduk')
            ->first();
        $teman = $this->informasi
            ->where('informasi', 'Teman')
            ->first();
        $male = $this->jenisKelamin
            ->where('jenis_kelamin', 'Laki-Laki')
            ->first();
        $female = $this->jenisKelamin
            ->where('jenis_kelamin', 'Perempuan')
            ->first();

        $info = $this->informasi
            ->orderBy('informasi')
            ->get();
        $mhs = $this->mahasiswa
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoBrosur = $this->mahasiswaData
            ->where('informasi_id', $brosur->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoKeluarga = $this->mahasiswaData
            ->where('informasi_id', $keluarga->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoLainnya = $this->mahasiswaData
            ->where('informasi_id', $lainnya->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoMediaSosial = $this->mahasiswaData
            ->where('informasi_id', $mediaSosial->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoPoster = $this->mahasiswaData
            ->where('informasi_id', $poster->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoSekolah = $this->mahasiswaData
            ->where('informasi_id', $sekolah->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoSpanduk = $this->mahasiswaData
            ->where('informasi_id', $spanduk->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $infoTeman = $this->mahasiswaData
            ->where('informasi_id', $teman->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $mhsMale = $this->mahasiswaData
            ->where('jenis_kelamin_id', $male->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $mhsFemale = $this->mahasiswaData
            ->where('jenis_kelamin_id', $female->id)
            ->whereYear('created_at', date('Y'))
            ->count('id');
        $mhsMalePerYear = $this->mahasiswaData
            ->where('jenis_kelamin_id', $male->id)
            ->selectRaw('COUNT(id) as data, YEAR(created_at) as year')
            ->groupBy('year')
            ->orderBy('year', 'ASC')
            ->get();
        $mhsFemalePerYear = $this->mahasiswaData
            ->where('jenis_kelamin_id', $female->id)
            ->selectRaw('COUNT(id) as data, YEAR(created_at) as year')
            ->groupBy('year')
            ->orderBy('year', 'ASC')
            ->get();
        $year = $this->mahasiswaData
            ->selectRaw('YEAR(created_at) as year')
            ->groupBy('year')
            ->pluck('year');

        return inertia('Panel/Dashboard', [
            'informasi' => $info,
            'infoBrosur' => $infoBrosur,
            'infoKeluarga' => $infoKeluarga,
            'infoLainnya' => $infoLainnya,
            'infoMediaSosial' => $infoMediaSosial,
            'infoPoster' => $infoPoster,
            'infoSekolah' => $infoSekolah,
            'infoSpanduk' => $infoSpanduk,
            'infoTeman' => $infoTeman,
            'mhs' => $mhs,
            'mhsMale' => $mhsMale,
            'mhsFemale' => $mhsFemale,
            'mhsMalePerYear' => $mhsMalePerYear,
            'mhsFemalePerYear' => $mhsFemalePerYear,
            'status' => session('status'),
            'year' => $year,
        ]);
    }
}
