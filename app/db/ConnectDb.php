<?php
namespace db;

use exception\DbError;

class ConnectDb {
    protected $connect;

    public function __construct() {
        $this->connect = mysqli_connect('sql304.epizy.com', 'epiz_32190553', 'UCvdZ2Ztb5np', 'epiz_32190553_aktivitas_instagram');        if(!$this->connect) {
            throw new DbError('terjadi kesalahan pada saat koneksi ke database');
        }
    }
}