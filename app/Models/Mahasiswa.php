<?php

namespace App\Models;

use App\Models\Ibu;
use App\Models\Ayah;
use App\Models\MahasiswaData;
use App\Models\BuktiPendaftaran;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Mahasiswa extends Model
{
    use HasFactory, HasUuids, Notifiable;

    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'id',
    ];

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'mahasiswa';

    /**
     * 
     */
    public function ayah(): HasOne
    {
        return $this->hasOne(Ayah::class);
    }

    /**
     * 
     */
    public function bukti_pendaftaran(): HasOne
    {
        return $this->hasOne(BuktiPendaftaran::class);
    }

    /**
     * 
     */
    public function ibu(): HasOne
    {
        return $this->hasOne(Ibu::class);
    }

    /**
     * 
     */
    public function mahasiswa_data(): HasOne
    {
        return $this->hasOne(MahasiswaData::class);
    }
}
