<?php

require $_SERVER['DOCUMENT_ROOT'] . '/classes/init.php';

use auth\Auth;
use exception\DbError;

try {
    $auth = new Auth();
} catch(DbError $error) {
    echo '<p style="color: red;">' . $error->getMessage() . '</p>';
} 