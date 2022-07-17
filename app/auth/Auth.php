<?php
namespace auth;

use exception\DbError;

class Auth {
    private $connect;

    public function __construct() {
        $this->connect = mysqli_connect('sql110.epizy.com', 'epiz_32185895', 'OxELDenJtMzjNi', 'aktivitas_instagram');
        if(!$this->connect) {
            throw new DbError('terjadi kesalahan pada saat koneksi ke database');
        }
    }

    public function login() {}

    public function logout() {}

    public function tambahUser() {}

    public function generateApiKey($otoCode) {
        $rc = curl_init();
        curl_setopt($rc, CURLOPT_URL, 'https://api.instagram.com/oauth/access_token');
        curl_setopt($rc, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($rc, CURLOPT_CUSTOMREQUEST, 'POST');
        $paramter = [
            'client_id' => '808287670337426',
            'client_secret' => 'd4e8b44cec77f7fd6d8bf2813bc425f9',
            'grant_type' => 'authorization_code',
            'redirect_uri' => 'https://lramdhan.github.io/aktivitas-instagram/',
            'code' => preg_replace('[#_]', '', $otoCode)
        ];
        curl_setopt($rc, CURLOPT_POSTFIELDS, $paramter);
        $response = curl_exec($rc);
        curl_close($rc);
        return $response;
    }

    public function otorasi() {
        return header('Location: https://api.instagram.com/oauth/authorize?client_id=808287670337426&redirect_uri=https://lramdhan.github.io/aktivitas-instagram/&scope=user_profile,user_media&response_type=code');
    }

    public function getUserId($token) {
        return file_get_contents('https://graph.instagram.com/me?fields=id&access_token='. $token);
    }
     
    public function getUsdcecerId() {}

    public function checkUserId($hashId) {
        $query = mysqli_query($this->connect, "SELECT user_id FROM users");
        $usersId = [];
        while($ud = mysqli_fetch_assoc($query)) {
            $usersId[] = $ud;
        }
        foreach($usersId as $id) {
            if(password_verify($id['user_id'], $hashId)) {
                return $id;
            }
        }
        return false;
    }

    public function checkExpKey() {}

    public function perbaruiKey() {}

    public function checkLogin() {}
}