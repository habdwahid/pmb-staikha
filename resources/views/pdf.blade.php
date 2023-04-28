<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="Content-Type" content="text/html" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{{ str($buktiPendaftaran->bukti_pendaftaran)->after('bukti pendaftaran/') }}</title>

  <!-- Stylesheet -->
  <style>
    @page {
      size: 8.5in 8in landscape;
    }

    * {
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    html {
      font-family: Arial, sans-serif;
    }

    body {
      line-height: 2;
    }

    td {
      font-size: 10pt;
      font-weight: 700;
    }

    .container {
      padding-left: 1.5cm;
      padding-right: 1.5cm;
    }

    .col {
      width: 100%;
    }

    .col-1 {
      width: 8.333333%;
    }

    .col-4 {
      width: 33.333333%;
    }

    .col-6 {
      width: 50%;
    }

    .footer {
      border: 1px solid;
      line-height: 1;
      margin-top: 0.5rem;
      overflow: auto;
      padding: 0.5rem;
    }

    .form-check-label {
      font-family: 'Times New Roman', Times, serif;
      font-size: 12pt;
      vertical-align: text-top;
    }

    .fw-bolder {
      font-weight: bolder;
    }

    .header {
      margin: auto;
      height: auto;
      width: 100%;
    }

    .inline-block {
      display: inline-block;
    }

    .qr {
      float: right;
      height: 3.8cm;
      width: 3.8cm;
    }

    .table {
      width: 100%;
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }
  </style>
</head>

<body>
  <img src="{{ asset('assets/img/header.jpg') }}" alt="" class="header" />
  <div class="container">
    <h1 class="text-center fw-bolder">TANDA BUKTI PENDAFTARAN</h1>

    <table class="table">
      <thead>
        <tr>
          <th class="col-4"></th>
          <th class="col-1"></th>
          <th class="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Nama</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->nama_lengkap }}</td>
        </tr>
        <tr>
          <td>Tempat, Tanggal Lahir</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->mahasiswa_data->tempat_lahir . ', ' . $buktiPendaftaran->mahasiswa->mahasiswa_data->tanggal_lahir }}</td>
        </tr>
        <tr>
          <td>NIK (No Induk KTP)</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->mahasiswa_data->nik->nik }}</td>
        </tr>
        <tr>
          <td>Alamat (Domisili)</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->mahasiswa_data->alamat }}</td>
        </tr>
        <tr>
          <td></td>
          <td class="text-right"></td>
          <td>Desa/Kel: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->desa }}, Kecamatan: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->kecamatan }}</td>
        </tr>
        <tr>
          <td></td>
          <td class="text-right"></td>
          <td>Kab/Kota: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->kabupaten }}, Provinsi: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->provinsi }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->email }}</td>
        </tr>
        <tr>
          <td>No. Handphone/WA</td>
          <td class="text-right">:</td>
          <td>{{ $buktiPendaftaran->mahasiswa->phone->phone }}</td>
        </tr>
      </tbody>
    </table>

    <div class="footer">
      <div class="inline-block">
        <div>
          <input type="checkbox" name="form" id="form">
          <label for="form" class="form-check-label">Formulir</label>
        </div>
        <div>
          <input type="checkbox" name="regist" id="regist">
          <label for="regist" class="form-check-label">Biaya pendaftaran Rp. 150.000</label>
        </div>
        <div>
          <input type="checkbox" name="ijazah" id="ijazah">
          <label for="ijazah" class="form-check-label">Photocopy Ijazah dilegalisir (2 lembar)</label>
        </div>
        <div>
          <input type="checkbox" name="foto" id="foto">
          <label for="foto" class="form-check-label">Pas foto ukuran 3x4 (4 lembar), 4x6 (4 lembar)</label>
        </div>
        <div>
          <input type="checkbox" name="ktp" id="ktp">
          <label for="ktp" class="form-check-label">Photocopy Kartu Tanda Penduduk (KTP) (2 lembar)</label>
        </div>
        <div>
          <input type="checkbox" name="kk" id="kk">
          <label for="kk" class="form-check-label">Photocopy Kartu Keluarga (KK) (2 lembar)</label>
        </div>
      </div>
      <img src="{{ asset('assets/img/qr.jpg') }}" alt="QR" class="qr" />
    </div>
  </div>
</body>

</html>