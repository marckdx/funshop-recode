<?php

require_once './conexao.class.php';
require_once './login.class.php';

$login = $_POST["login_email"];
$senha = md5($_POST["login_senha"]);

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    header("Location: http://localhost/site-php-funshop/view/login.php?action=loginerror");
} else {
    if(login::verificaLogin($login, $senha)==true){
        // header("Location: http://localhost/site-php-funshop/view/index.php?action=welcome");
        echo 'sim';
    }else{
        // header("Location: http://localhost/site-php-funshop/view/login.php?action=loginerror");
    }
}
