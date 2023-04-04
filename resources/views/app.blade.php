<!DOCTYPE html>
<html lang="id">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="Sekolah Tinggi Agama Islam KH. Abdul Kabier" />
  <meta name="description" content="Penerimaan Mahasiswa Baru Sekolah Tinggi Agama Islam KH. Abdul Kabier" />
  <!-- Favicon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Stylesheets -->
  <link rel="stylesheet" href="/assets/css/bootstrap.min.css">

  <!-- Scripts -->
  @inertiaHead
  @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
  <script src="/assets/js/bootstrap.bundle.min.js"></script>
  @viteReactRefresh
</head>

<body class="bg-success">
  @inertia
</body>

</html>