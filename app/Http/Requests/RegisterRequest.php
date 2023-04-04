<?php

namespace App\Http\Requests;

use App\Models\Mahasiswa;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Create a new request instance.
     */
    public function __construct(
        protected Mahasiswa $mahasiswa,
    ) {
        // 
    }

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'agama' => ['required'],
            'alamat' => ['required', 'string', 'max:255'],
            'asal_sekolah' => ['required', 'string', 'max:128'],
            'desa' => ['required', 'string', 'max:64'],
            'email' => ['required', 'unique:mahasiswa,email', 'string', 'max:128'],
            'informasi' => ['required'],
            'jenis_kelamin' => ['required'],
            'kabupaten' => ['required', 'string', 'max:64'],
            'kartu_keluarga' => ['required', 'file', 'max:1024', 'mimes:pdf,jpeg,jpg'],
            'kecamatan' => ['required', 'string', 'max:64'],
            'kode_pos' => ['required', 'numeric', 'digits:5'],
            'nama_ayah' => ['required', 'string', 'max:128'],
            'nama_ibu' => ['required', 'string', 'max:128'],
            'nama_lengkap' => ['required', 'string', 'max:128'],
            'nik' => ['required', 'unique:nik,nik', 'numeric', 'digits:16'],
            'nisn' => ['required', 'unique:nisn,nisn', 'numeric', 'digits:10'],
            'pekerjaan_ayah' => ['required', 'string', 'max:64'],
            'pekerjaan_ibu' => ['required', 'string', 'max:64'],
            'pendidikan_ayah' => ['required'],
            'pendidikan_ibu' => ['required'],
            'penghasilan_ayah' => ['required', 'numeric'],
            'penghasilan_ibu' => ['required', 'numeric'],
            'phone' => ['required', 'unique:phone,phone', 'numeric', 'max_digits:13'],
            'program_studi' => ['required'],
            'provinsi' => ['required', 'string', 'max:64'],
            'tanggal_lahir' => ['required', 'date'],
            'tanggal_lahir_ayah' => ['required', 'date'],
            'tanggal_lahir_ibu' => ['required', 'date'],
            'tempat_lahir' => ['required', 'string', 'max:64'],
            'tempat_lahir_ayah' => ['required', 'string', 'max:64'],
            'tempat_lahir_ibu' => ['required', 'string', 'max:64'],
        ];
    }

    /**
     * 
     */
    public function store(): void
    {
        $this->mahasiswa->nama_lengkap = $this->nama_lengkap;
        $this->mahasiswa->email = str($this->email)->lower();

        $this->mahasiswa->save();
    }
}
