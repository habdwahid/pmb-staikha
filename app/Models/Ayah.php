<?php

namespace App\Models;

use Carbon\Carbon;
use App\Models\Mahasiswa;
use App\Models\Pendidikan;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Ayah extends Model
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
    protected $table = 'ayah';

    /**
     * 
     */
    public function getTanggalLahirAttribute()
    {
        return Carbon::parse($this->attributes['tanggal_lahir'])
            ->isoFormat('DD MMMM Y');
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
    public function pendidikan(): BelongsTo
    {
        return $this->belongsTo(Pendidikan::class);
    }
}
