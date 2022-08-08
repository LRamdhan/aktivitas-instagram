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
</head>
<body>
    <h2>selamat datang di aktivitas instagram</h2>

    <form action="page/start.php" method="post">
        <button type="submit" name="logout" value="1">logout</button>
    </form>

    <script type="module" src="js/main.js?i=<?= uniqid(); ?>"></script>
</body>
</html>