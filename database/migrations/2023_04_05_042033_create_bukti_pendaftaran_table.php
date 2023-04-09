<?php

use App\Models\Mahasiswa;
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
        Schema::create('bukti_pendaftaran', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(Mahasiswa::class);
            $table->string('bukti_pendaftaran');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bukti_pendaftarans');
    }
};
