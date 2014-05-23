<?php
require_once '../control/conexao.class.php';

if(!isset($_POST["login_email"]) or !isset($_POST["login_senha"]) or $_POST["login_senha"]=="" or $_POST["login_email"]==""){
    header("Location: http://localhost/site-php-funshop/view/login.php?action=loginerror");
}else{
    session_start();
    $_SESSION["ds_email"] = $_POST["login_email"];
    header("Location: ../view/index.php");
}