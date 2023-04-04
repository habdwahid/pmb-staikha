<?php

namespace App\Observers\Register;

use App\Models\Nisn;
use App\Models\MahasiswaData;

class NisnObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected Nisn $nisn,
    ) {
        // 
    }

    /**
     * Handle the MahasiswaData "created" event.
     */
    public function created(MahasiswaData $mahasiswaData): void
    {
        $this->nisn->mahasiswa_data_id = $mahasiswaData->id;
        $this->nisn->nisn = request('nisn');

        $this->nisn->save();
    }

    /**
     * Handle the MahasiswaData "deleted" event.
     */
    public function deleted(MahasiswaData $mahasiswaData): void
    {
        $this->nisn
            ->where('mahasiswa_data_id', $mahasiswaData->id)
            ->delete();
    }
}
