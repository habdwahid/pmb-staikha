<?php

namespace App\Observers\Register;

use App\Models\Phone;
use App\Models\MahasiswaData;

class PhoneObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected Phone $phone,
    ) {
        // 
    }

    /**
     * Handle the MahasiswaData "created" event.
     */
    public function created(MahasiswaData $mahasiswaData): void
    {
        $this->phone->mahasiswa_data_id = $mahasiswaData->id;
        $this->phone->phone = request('phone');

        $this->phone->save();
    }

    /**
     * Handle the MahasiswaData "deleted" event.
     */
    public function deleted(MahasiswaData $mahasiswaData): void
    {
        $this->phone
            ->where('mahasiswa_data_id', $mahasiswaData->id)
            ->delete();
    }
}
