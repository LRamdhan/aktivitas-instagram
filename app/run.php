<?php

// di hosting
// require $_SERVER['DOCUMENT_ROOT'] . '/classes/init.php';

// di local
require $_SERVER['DOCUMENT_ROOT'] . '\tutorial\rest api\chapter06\aktivitas-instagram\classes\init.php';

use auth\Auth;
use exception\DbError;

try {
    $auth = new Auth();
} catch(DbError $error) {
    echo '<p style="color: red;">' . $error->getMessage() . '</p>';
} 