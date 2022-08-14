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
    <!-- <h2>selamat datang di aktivitas instagram</h2>
    <form action="page/start.php" method="post">
        <button type="submit" name="logout" value="1">logout</button>
    </form>
    <br>
    <button data-id="17920164473056337" id="detail">detail postingan</button>
    <button id="muat-lebih">muat lebih</button> -->

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

        <form action="page/start.php" method="post" class="form-logout">
            <button type="submit" name="logout" value="1" class="tombol">logout</button>
        </form>

        <section class="postingan">
            <ul type="square">
                <li>
                    link gambar : <span class="gambar-post"></span>
                    <br>
                    waktu : <span class="waktu"></span>
                    <br>
                    <button data-id="17920164473056337" id="detail">detail</button>
                </li>
            </ul>
        </section>

        <button id="muat-lebih">muat lebih</button>
    </div>

    <!-- <script type="module" src="js/main.js?i=<?= uniqid(); ?>"></script> -->
    <script type="module" src="js/modules/requests.js?i=<?= uniqid(); ?>"></script>
</body>
</html>