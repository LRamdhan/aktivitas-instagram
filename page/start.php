<?php

require '../exe/run.php';

$auth->checkCookieValid();

// jika tombol mulai ditekan
if($auth->login()) {
    header("Location: ../");
    die;
}


// jika tidak melakukan apapun
echo '<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>aktivitas instagram</title>
        </head>
        <body>
            <form action="" method="post">
                <button type="submit" name="mulai">mulai dan beri izin</button>
            </form>
        </body>
        </html>';
?>