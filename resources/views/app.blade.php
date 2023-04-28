<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Sekolah Tinggi Agama Islam KH. Abdul Kabier" />
  <meta name="description" content="Penerimaan Mahasiswa Baru Sekolah Tinggi Agama Islam KH. Abdul Kabier" />
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('apple-touch-icon.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('favicon-32x32.png') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('favicon-16x16.png') }}">
  <link rel="manifest" href="{{ asset('site.webmanifest') }}">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css') }}">

  <!-- Scripts -->
  @routes
  @inertiaHead
  <script src="{{ asset('assets/js/bootstrap.bundle.min.js') }}"></script>
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
</head>

<body>
  @inertia
</body>

</html>