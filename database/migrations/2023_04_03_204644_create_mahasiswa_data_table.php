<?php

use App\Models\Agama;
use App\Models\Informasi;
use App\Models\Mahasiswa;
use App\Models\JenisKelamin;
use App\Models\ProgramStudi;
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
        Schema::create('mahasiswa_data', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(Mahasiswa::class);
            $table->string('tempat_lahir', 64);
            $table->date('tanggal_lahir');
            $table->foreignIdFor(JenisKelamin::class);
            $table->foreignIdFor(Agama::class);
            $table->string('alamat');
            $table->string('desa', 64);
            $table->string('kecamatan', 64);
            $table->string('kabupaten', 64);
            $table->string('provinsi', 64);
            $table->string('kode_pos', 5);
            $table->string('asal_sekolah', 128);
            $table->string('kartu_keluarga');
            $table->foreignIdFor(ProgramStudi::class);
            $table->foreignIdFor(Informasi::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mahasiswa_data');
    }
};
