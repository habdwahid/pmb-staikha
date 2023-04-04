<?php

namespace App\Models;

use App\Models\Ibu;
use App\Models\Ayah;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pendidikan extends Model
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
    protected $table = 'pendidikan';

    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * 
     */
    public function ayah(): HasMany
    {
        return $this->hasMany(Ayah::class);
    }

    /**
     * 
     */
    public function ibu(): HasMany
    {
        return $this->hasMany(Ibu::class);
    }
}
