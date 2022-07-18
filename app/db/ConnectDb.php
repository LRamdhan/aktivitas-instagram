<?php
namespace db;

use exception\DbError;

class ConnectDb {
    private $connect;

    public function __construct() {
        $this->connect = mysqli_connect('sql304.epizy.com', 'epiz_32190553', '
        UCvdZ2Ztb5np', 'aktivitas_instagram');
        if(!$this->connect) {
            throw new DbError('terjadi kesalahan pada saat koneksi ke database');
        }
    }
}