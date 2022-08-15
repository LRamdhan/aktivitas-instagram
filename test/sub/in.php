<?php

// menambah cookie di local
$idUser = '17841407497847965';
$token = 'IGQVJYM3lLbHBORUNkSHlWbFg5eTFkVy0tclFocUlFZAlYyUkM1N3BJTVJ0UGpXV3NMMC1TcjBiNnV0ZA1dJTnczcGtCRjFKcmNtcWx5V19hY0V4MDhUY1YwNHZAkQXliUjBaSzFBZAlhn';

$newToken = 'IGQVJWbENMLTM3Q1ByclptMWdCZAk9KMEZAkTU5CMW9fRTdvZA3NZALUFOVTJweXNFUzFaUmEwRFh6NW02SUhwbUNZATXlFTDFEdUVwczhTUEh3V3VVbGh3UDA0c1V3SzljZAGpuV3FZASzR3';

// setcookie('aktv', password_hash($idUser, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram'); 
setcookie('kytok', $newToken, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');
// setcookie('statin', true, time() + 60 * 60 * 24 * 5, '/tutorial/rest%20api/chapter06/aktivitas-instagram');



?>

<title>in</title>