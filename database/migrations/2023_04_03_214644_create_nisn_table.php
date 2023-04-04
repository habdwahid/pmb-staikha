<?php

use App\Models\MahasiswaData;
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
        Schema::create('nisn', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignIdFor(MahasiswaData::class);
            $table->string('nisn', 10)->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nisns');
    }
};
