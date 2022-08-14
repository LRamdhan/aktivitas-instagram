<?php

// menambah cookie di local
$idUser = '17841407497847965';
$token = 'IGQVJYM3lLbHBORUNkSHlWbFg5eTFkVy0tclFocUlFZAlYyUkM1N3BJTVJ0UGpXV3NMMC1TcjBiNnV0ZA1dJTnczcGtCRjFKcmNtcWx5V19hY0V4MDhUY1YwNHZAkQXliUjBaSzFBZAlhn';

setcookie('aktv', password_hash($idUser, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram'); 
setcookie('kytok', $token, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');
setcookie('statin', true, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');



?>

<title>in</title>