<?php

namespace App\Observers\Register;

use App\Models\Mahasiswa;
use App\Models\BuktiPendaftaran;
use Illuminate\Support\Facades\Storage;

class BuktiPendaftaranObserver
{
    /**
     * Create a new observer instance.
     */
    public function __construct(
        protected BuktiPendaftaran $buktiPendaftaran,
    ) {
        // 
    }

    /**
     * Handle the Mahasiswa "created" event.
     */
    public function created(Mahasiswa $mahasiswa): void
    {
        $this->buktiPendaftaran->mahasiswa_id = $mahasiswa->id;
        $this->buktiPendaftaran->bukti_pendaftaran = 'mahasiswa/bukti pendaftaran/' . $mahasiswa->mahasiswa_data->nisn->nisn . '_' . str($mahasiswa->nama_lengkap)->upper() . '.pdf';

        $this->buktiPendaftaran->save();
    }

    /**
     * Handle the Mahasiswa "deleted" event.
     */
    public function deleted(Mahasiswa $mahasiswa): void
    {
        Storage::delete($this->buktiPendaftaran->bukti_pendaftaran);

        $this->buktiPendaftaran
            ->where('mahasiswa_id', $mahasiswa->id)
            ->delete();
    }
}
