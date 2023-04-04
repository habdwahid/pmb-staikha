<?php

use App\Models\Mahasiswa;
use App\Models\Pendidikan;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ibu', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(Mahasiswa::class);
            $table->string('nama', 128);
            $table->string('tempat_lahir', 64);
            $table->date('tanggal_lahir');
            $table->foreignIdFor(Pendidikan::class);
            $table->string('pekerjaan', 64);
            $table->integer('penghasilan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ibus');
    }
};
