<?php

namespace App\Observers\Register;

use App\Models\Ayah;
use App\Models\Mahasiswa;

class AyahObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected Ayah $ayah,
    ) {
        // 
    }

    /**
     * Handle the Mahasiswa "created" event.
     */
    public function created(Mahasiswa $mahasiswa): void
    {
        $this->ayah->mahasiswa_id = $mahasiswa->id;
        $this->ayah->nama = request('nama_ayah');
        $this->ayah->tempat_lahir = request('tempat_lahir_ayah');
        $this->ayah->tanggal_lahir = request('tanggal_lahir_ayah');
        $this->ayah->pendidikan_id = request('pendidikan_ayah');
        $this->ayah->pekerjaan = request('pekerjaan_ayah');
        $this->ayah->penghasilan = request('penghasilan_ayah');

        $this->ayah->save();
    }

    /**
     * Handle the Mahasiswa "deleted" event.
     */
    public function deleted(Mahasiswa $mahasiswa): void
    {
        $this->ayah
            ->where('mahasiswa_id', $mahasiswa->id)
            ->delete();
    }
}
