<?php
namespace auth;

use db\ConnectDb;

class Auth extends ConnectDb {
    public function login() {
        // cek id user
        if(isset($_POST['mulai']) || isset($_GET['code'])) {
            if(isset($_POST['mulai'])) {
                if(isset($_COOKIE['aktv'])) {
                    $dUser = $this->checkUserId($_COOKIE['aktv']);
                    if($dUser) {
                        $idUser = $dUser['user_id'];
                        $token = $dUser['api_key'];
                    } else {
                        $this->otorasi();
                        die;
                    }
                } else {
                    $this->otorasi();
                    die;
                }
            } else {
                $token = json_decode($this->generateApiKey($_GET['code']), true);
                $idUser = $token['user_id'];
                $token = $token['access_token'];
            }
            
            // cek user di db
            if($this->checkUserId($idUser)) {
                if($this->checkExpKey($token)) {
                    $this->otorasi();
                    die;
                } else {
                    $token = $this->perpanjangToken($token);
                    $this->updateTokenDb($idUser, $token);
                    // end
                }
            } else {
                $token = $this->perpanjangToken($token);
                $this->tambahUserDb($idUser, $token);
                // end
            }

            setcookie('aktv', password_hash($idUser, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5); 
            setcookie('kytok', password_hash($token, PASSWORD_DEFAULT), time() + 60 * 60 * 24 * 5);
            setcookie('statin', true);
            return true;
        }
        return false;
    }

    public function generateApiKey($otoCode) {
        $rc = curl_init();
        curl_setopt($rc, CURLOPT_URL, 'https://api.instagram.com/oauth/access_token');
        curl_setopt($rc, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($rc, CURLOPT_CUSTOMREQUEST, 'POST');
        $paramter = [
            'client_id' => '808287670337426',
            'client_secret' => 'd4e8b44cec77f7fd6d8bf2813bc425f9',
            'grant_type' => 'authorization_code',
            'redirect_uri' => 'https://aktivitasinstagram.ga/page/start.php',
            'code' => preg_replace('[#_]', '', $otoCode)
        ];
        curl_setopt($rc, CURLOPT_POSTFIELDS, $paramter);
        $response = curl_exec($rc);
        curl_close($rc);
        return $response;
    }

    public function otorasi() {
        return header('Location: https://api.instagram.com/oauth/authorize?client_id=808287670337426&redirect_uri=https://aktivitasinstagram.ga/page/start.php&scope=user_profile,user_media&response_type=code');
    }
     
    public function checkUserId($hashId) {
        $query = mysqli_query($this->connect, "SELECT user_id, api_key FROM users");
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

    public function checkExpKey($token) {
        $rc = curl_init();
        curl_setopt($rc, CURLOPT_URL, 'https://graph.instagram.com/me?fields=id&access_token=IGQVJVZAkNySnlzaDRqZA2NUT3EwY1dTWVdrQWNmN2NZAcGhvOGVTMGpkX1ZAFSFEtSE1uaGk5S2REdGtNcXBKd1BYOE1KaXF4eDJxeGtxeWVqcW0wRXl3OVl1MmF4MUd4cDgxTDNqTmVtV3kxSkpMeHdIXzNnQk9JUWd5LXow');
        curl_setopt($rc, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($rc, CURLOPT_CUSTOMREQUEST, 'GET');
        $response = curl_exec($rc);
        curl_close($rc);
        if(isset($response['error'])) return true;
        return false;
    }

    public function perpanjangToken($token) {
        $rc = curl_init();
        curl_setopt($rc, CURLOPT_URL, ' https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=d4e8b44cec77f7fd6d8bf2813bc425f9&access_token=' . $token);
        curl_setopt($rc, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($rc, CURLOPT_CUSTOMREQUEST, 'GET');
        $response = curl_exec($rc);
        curl_close($rc);
        return $response;
    }

    public function updateTokenDb($id, $token) {
        return mysqli_query($this->connect, "UPDATE users SET api_key = '$token' WHERE user_id = '$id'");
    }

    public function tambahUserDb($id, $token) {
        return mysqli_query($this->connect, "INSERT INTO users(user_id, api_key) VALUES('$id', '$token')");
    }

    public function checkCookieValid() {
        if(!$_COOKIE['statin']) {
            header('Location: /');
            die;
        }
    }
}