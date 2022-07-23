<?php

// jika code otorasi sudah sampai
if(isset($_GET['code'])) {
    $token = $auth->generateApiKey($_GET['code']);
    $userId = $auth->getUserid($token);
    setcookie('aktv', password_hash($userId, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5);   
    die;
}

// jika tombol mulai ditekan
if(isset($_POST['mulai'])) {
    // cek cookie
    if(isset($_COOKIE['aktv'])) {
        $id = $auth->checkUserId($_COOKIE['aktv']);
        if($id) {
           setcookie('aktv', password_hash($id, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5);
        } else {
            $auth->otorasi();
        }
    } else {
        $auth->otorasi();
    }
    die;
}






// jika code otorasi sudah sampai
if(isset($_GET['code'])) {
    $token = $auth->generateApiKey($_GET['code']);
    $userId = $auth->getUserid($token);
    setcookie('aktv', password_hash($userId, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5);   
    die;
}

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
            }
        } else {
            $auth->otorasi();
        }
        die;
    } else {
        $token = $auth->generateApiKey($_GET['code']);
        $idUser = $auth->getUserid($token);
    }
    echo $idUser;
    // check api key
    die 
}
