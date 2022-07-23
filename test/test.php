<?php

// $json = file_get_contents('https://graph.instagram.com/me?fields=id&access_token=IGQVJYQklLM2RGbzhqMzEyaURObGFDak1JcEN1U1dnUDNLV2xyeDhZANExxdFZASMFZANN1E2aU55QkthbVpVcnZAxRkN3UndSX1NhS0h2SjZAUVmhCLURjb0l5bzllOW1zQmpjN0pKVnVn'); 

// $json = file_get_contents('https://graph.instagram.com/me?fields=id&access_token=IGQVJVZAkNySnlzaDRqZA2NUT3EwY1dTWVdrQWNmN2NZAcGhvOGVTMGpkX1ZAFSFEtSE1uaGk5S2REdGtNcXBKd1BYOE1KaXF4eDJxeGtxeWVqcW0wRXl3OVl1MmF4MUd4cDgxTDNqTmVtV3kxSkpMeHdIXzNnQk9JUWd5LXow');

// function request($url) {
//    $rc = curl_init();
//    curl_setopt($rc, CURLOPT_URL, $url);
//    curl_setopt($rc, CURLOPT_RETURNTRANSFER, 1);
//    curl_setopt($rc, CURLOPT_CUSTOMREQUEST, 'GET');
//    $response = curl_exec($rc);
//    curl_close($rc);
//    return $response;
// }

// $json = request('https://graph.instagram.com/me?fields=id&access_token=IGQVJVZAkNySnlzaDRqZA2NUT3EwY1dTWVdrQWNmN2NZAcGhvOGVTMGpkX1ZAFSFEtSE1uaGk5S2REdGtNcXBKd1BYOE1KaXF4eDJxeGtxeWVqcW0wRXl3OVl1MmF4MUd4cDgxTDNqTmVtV3kxSkpMeHdIXzNnQk9JUWd5LXow');

// IGQVJVZAkNySnlzaDRqZA2NUT3EwY1dTWVdrQWNmN2NZAcGhvOGVTMGpkX1ZAFSFEtSE1uaGk5S2REdGtNcXBKd1BYOE1KaXF4eDJxeGtxeWVqcW0wRXl3OVl1MmF4MUd4cDgxTDNqTmVtV3kxSkpMeHdIXzNnQk9JUWd5LXow

// $data = json_decode($json, true);

// if(isset($data['error'])) {
//    echo 'key expired';
// } else {
//    print_r($data);
// }

// $connect = mysqli_connect('localhost', 'root', '', 'aktivitas_instagram');        

// $query = mysqli_query($connect, "UPDATE users SET api_key = 'IGQVJVZAkNySnlzaDRqZA2NUT3EwY1dTWVdrQWNmN2NZAcGhvOGVTMGpkX1ZAFSFEtSE1uaGk5S2REdGtNcXBKd1BYOE1KaXF4eDJxeGtxeWVqcW0wRXl3OVl1MmF4MUd4cDgxTDNqTmVtV3kxSkpMeHdIXzNnQk9JUWd5LXow' WHERE user_id = '424242'");

// if($query) {
//    echo 'berhasil';
// } else {
//    echo 'gagal';
// }

// realpath()
// echo mkdir('');

// require '../experiment2/coba.php';

// header('./iseng.php');
// die;

// echo realpath(dirname(__FILE__));

$path =  $_SERVER['DOCUMENT_ROOT'] . '/iseng.php';
// header("Location: " . $path);

// header("Location: /iseng.php");

// require '/iseng.php';

// echo $_SERVER['DOCUMENT_ROOT'];

?>

<title>test</title>