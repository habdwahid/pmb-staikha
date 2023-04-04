<?php

namespace App\Observers\Register;

use App\Models\Nik;
use App\Models\MahasiswaData;

class NikObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected Nik $nik,
    ) {
        // 
    }

    /**
     * Handle the MahasiswaData "created" event.
     */
    public function created(MahasiswaData $mahasiswaData): void
    {
        $this->nik->mahasiswa_data_id = $mahasiswaData->id;
        $this->nik->nik = request('nik');

        $this->nik->save();
    }

    /**
     * Handle the MahasiswaData "deleted" event.
     */
    public function deleted(MahasiswaData $mahasiswaData): void
    {
        $this->nik
            ->where('mahasiswa_data_id', $mahasiswaData->id)
            ->delete();
    }
}
