<?php

require '../app/init.php';

use auth\Auth;
use exception\DbError;

try {
    $auth = new Auth();
} catch(DbError $error) {
    echo '<p style="color: red;">' . $error->getMessage() . '</p>';
} 