<?php
    
require 'app/run.php';

$auth->checkCookieInvalid();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>aktivitas instagram</title>
    <link rel="stylesheet" href="css/style.css?i=<?= uniqid(); ?>">
</head>
<body>
    <div class="container">
        <section class="data-user">
            <div class="sub-user">
                <h3>nama</h3>
                <h2 class="d-user"></h2>
            </div>
            <div class="sub-user">
                <h3>tipe akun</h3>
                <h2 class="d-user"></h2>
            </div>
            <div class="sub-user">
                <h3>jumlah media</h3>
                <h2 class="d-user"></h2>
            </div>
        </section>

        <section class="logout">
            <form action="page/start.php" method="post" class="form-logout">
                <button type="submit" name="logout" value="1" class="tombol">logout</button>
            </form>
        </section>

        <section class="postingan">
            <ul type="square" id="post"></ul>
            <button id="muat-lebih">muat lebih</button>
        </section>

        <div class="popup popup-hilang">
            <div class="detail">
                <button id="tutup">tutup</button>
                <br>
                <img id="gambar" class="gambar" src="">
                <div id="caption" class="caption"></div>
                <div id="tanggal" class="tanggal"></div>
                <div id="link" class="link"></div>
            </div>
        </div>
    </div>

    <!-- <script type="module" src="js/main.js?i=<?= uniqid(); ?>"></script> -->
    <script type="module" src="js/modules/exp.js?i=<?= uniqid(); ?>"></script>
</body>
</html>