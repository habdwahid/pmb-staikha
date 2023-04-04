<?php

namespace App\Observers\Register;

use App\Models\Ibu;
use App\Models\Mahasiswa;

class IbuObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected Ibu $ibu,
    ) {
        // 
    }

    /**
     * Handle the Mahasiswa "created" event.
     */
    public function created(Mahasiswa $mahasiswa): void
    {
        $this->ibu->mahasiswa_id = $mahasiswa->id;
        $this->ibu->nama = request('nama_ibu');
        $this->ibu->tempat_lahir = request('tempat_lahir_ibu');
        $this->ibu->tanggal_lahir = request('tanggal_lahir_ibu');
        $this->ibu->pendidikan_id = request('pendidikan_ibu');
        $this->ibu->pekerjaan = request('pekerjaan_ibu');
        $this->ibu->penghasilan = request('penghasilan_ibu');

        $this->ibu->save();
    }

    /**
     * Handle the Mahasiswa "deleted" event.
     */
    public function deleted(Mahasiswa $mahasiswa): void
    {
        $this->ibu
            ->where('mahasiswa_id', $mahasiswa->id)
            ->delete();
    }
}
