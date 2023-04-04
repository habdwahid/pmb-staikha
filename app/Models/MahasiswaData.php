<?php

namespace App\Models;

use App\Models\Nik;
use App\Models\Nisn;
use App\Models\Agama;
use App\Models\Phone;
use App\Models\Informasi;
use App\Models\Mahasiswa;
use App\Models\JenisKelamin;
use App\Models\ProgramStudi;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MahasiswaData extends Model
{
    use HasFactory, HasUuids;

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
    protected $table = 'mahasiswa_data';

    /**
     * 
     */
    public function agama(): BelongsTo
    {
        return $this->belongsTo(Agama::class);
    }

    /**
     * 
     */
    public function informasi(): BelongsTo
    {
        return $this->belongsTo(Informasi::class);
    }

    /**
     * 
     */
    public function jenis_kelamin(): BelongsTo
    {
        return $this->belongsTo(JenisKelamin::class);
    }

    /**
     * 
     */
    public function mahasiswa(): BelongsTo
    {
        return $this->belongsTo(Mahasiswa::class);
    }

    /**
     * 
     */
    public function nik(): HasOne
    {
        return $this->hasOne(Nik::class);
    }

    /**
     * 
     */
    public function nisn(): HasOne
    {
        return $this->hasOne(Nisn::class);
    }

    /**
     * 
     */
    public function phone(): HasOne
    {
        return $this->hasOne(Phone::class);
    }

    /**
     * 
     */
    public function program_studi(): BelongsTo
    {
        return $this->belongsTo(ProgramStudi::class);
    }
}
