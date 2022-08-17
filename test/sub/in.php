<?php

// menambah cookie di local
$idUser = '17841407497847965';
$token = '';

setcookie('aktv', password_hash($idUser, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram'); 
setcookie('kytok', $newToken, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');
setcookie('statin', true, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');



?>

<title>in</title>