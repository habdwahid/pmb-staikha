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
      margin: 0;
      size: 8.5in 8in landscape;
    }

    html {
      font-family: Arial, Helvetica, sans-serif;
    }

    body {
      margin: 0;
    }

    .container {
      padding-left: 1.5cm;
      padding-right: 1.5cm;
      width: 100%;
    }

    .header {
      margin: auto;
      height: auto;
      width: 100%;
    }

    .text-center {
      text-align: center;
    }
  </style>
</head>

<body>
  <img src="{{ asset('assets/img/header.jpg') }}" alt="" class="header" />
  <div class="container">
    <h1 class="text-center">TANDA BUKTI PENDAFTARAN</h1>

    <table>
      <tbody>
        <tr>
          <td class="text-center">1</td>
          <td>Nama</td>
          <td>: {{ $buktiPendaftaran->mahasiswa->nama_lengkap }}</td>
        </tr>
        <tr>
          <td class="text-center">2</td>
          <td>Tempat, Tanggal Lahir</td>
          <td>: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->tempat_lahir . ', ' . $buktiPendaftaran->mahasiswa->mahasiswa_data->tanggal_lahir }}</td>
        </tr>
        <tr>
          <td class="text-center">3</td>
          <td>NIK</td>
          <td>: {{ $buktiPendaftaran->mahasiswa->mahasiswa_data->nik->nik }}</td>
        </tr>
      </tbody>
    </table>

    <img src="{{ asset('assets/img/qr.jpg') }}" alt="" height="4" />
  </div>
</body>

</html>