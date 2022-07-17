<?php

spl_autoload_register(function($class) {
    require preg_replace('[\\\]', '/', $class) . '.php';
});
