<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(1)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        /**
         * Agama.
         */
        DB::table('agama')->insert([
            'id' => str()->uuid(),
            'agama' => 'Islam',
        ]);
        DB::table('agama')->insert([
            'id' => str()->uuid(),
            'agama' => 'Kristen',
        ]);
        DB::table('agama')->insert([
            'id' => str()->uuid(),
            'agama' => 'Buddha',
        ]);
        DB::table('agama')->insert([
            'id' => str()->uuid(),
            'agama' => 'Hindu',
        ]);

        /**
         * Informasi.
         */
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Poster',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Brosur',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Media Sosial',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Lainnya',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Spanduk',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Sekolah',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Teman',
        ]);
        DB::table('informasi')->insert([
            'id' => str()->uuid(),
            'informasi' => 'Keluarga',
        ]);

        /**
         * Jenis kelamin.
         */
        DB::table('jenis_kelamin')->insert([
            'id' => str()->uuid(),
            'jenis_kelamin' => 'Laki-Laki',
        ]);
        DB::table('jenis_kelamin')->insert([
            'id' => str()->uuid(),
            'jenis_kelamin' => 'Perempuan',
        ]);

        /**
         * Pendidikan.
         */
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'SD',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'SLTP',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'SLTA',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'S1',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'S2',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'S3',
        ]);
        DB::table('pendidikan')->insert([
            'id' => str()->uuid(),
            'pendidikan' => 'Tidak Sekolah',
        ]);

        /**
         * Program studi.
         */
        DB::table('program_studi')->insert([
            'id' => str()->uuid(),
            'program_studi' => 'S1 Pendidikan Agama Islam (PAI)',
        ]);
        DB::table('program_studi')->insert([
            'id' => str()->uuid(),
            'program_studi' => 'S1 Pendidikan Guru MI (PGMI)',
        ]);
        DB::table('program_studi')->insert([
            'id' => str()->uuid(),
            'program_studi' => 'S1 Ekonomi Syariah',
        ]);
    }
}
