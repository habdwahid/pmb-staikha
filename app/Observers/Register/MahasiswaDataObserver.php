<?php

namespace App\Observers\Register;

use App\Models\Mahasiswa;
use App\Models\MahasiswaData;

class MahasiswaDataObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected MahasiswaData $mahasiswaData,
    ) {
        // 
    }

    /**
     * Handle the Mahasiswa "created" event.
     */
    public function created(Mahasiswa $mahasiswa): void
    {
        $this->mahasiswaData->mahasiswa_id = $mahasiswa->id;
        $this->mahasiswaData->tempat_lahir = request('tempat_lahir');
        $this->mahasiswaData->tanggal_lahir = request('tanggal_lahir');
        $this->mahasiswaData->jenis_kelamin_id = request('jenis_kelamin');
        $this->mahasiswaData->agama_id = request('agama');
        $this->mahasiswaData->alamat = request('alamat');
        $this->mahasiswaData->desa = request('desa');
        $this->mahasiswaData->kecamatan = request('kecamatan');
        $this->mahasiswaData->kabupaten = request('kabupaten');
        $this->mahasiswaData->provinsi = request('provinsi');
        $this->mahasiswaData->kode_pos = request('kode_pos');
        $this->mahasiswaData->asal_sekolah = request('asal_sekolah');
        $this->mahasiswaData->kartu_keluarga = request('kartu_keluarga')->store('mahasiswa/kartu keluarga');
        $this->mahasiswaData->program_studi_id = request('program_studi');
        $this->mahasiswaData->informasi_id = request('informasi');

        $this->mahasiswaData->save();
    }

    /**
     * Handle the Mahasiswa "deleted" event.
     */
    public function deleted(Mahasiswa $mahasiswa): void
    {
        $this->mahasiswaData
            ->where('mahasiswa_id', $mahasiswa->id)
            ->delete();
    }
}
