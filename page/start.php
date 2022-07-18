<?php

require '../exe/run.php';

// buat cookie
// setcookie('aktv', password_hash(8347429, PASSWORD_DEFAULT), time() + 60 * 60);   
// setcookie('aktv', password_hash(8347429, PASSWORD_DEFAULT), time() - 3600);

// jika tombol mulai ditekan
if(isset($_POST['mulai']) || isset($_GET['code'])) {
    // cek cookie
    if(isset($_POST['mulai'])) {
        if(isset($_COOKIE['aktv'])) {
            $id = $auth->checkUserId($_COOKIE['aktv']);
            if($id) {
                $idUser = $id;
            } else {
                $auth->otorasi();
                die;
            }
        } else {
            $auth->otorasi();
            die;
        }
    } else {
        $token = json_decode($auth->generateApiKey($_GET['code']), true);
        $idUser = $token['user_id'];
    }
    setcookie('aktv', password_hash($idUser, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5); 
    echo 'id user : ' . $idUser;
    // check api key
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