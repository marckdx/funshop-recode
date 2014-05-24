<?php

require_once '../control/conexao.class.php';

$login = $_POST["login_email"];
$senha = $_POST["login_senha"];

if (!isset($_POST["login_email"]) or ! isset($_POST["login_senha"]) or $_POST["login_senha"] == "" or $_POST["login_email"] == "") {
    header("Location: http://localhost/site-php-funshop/view/login.php?action=loginerror");
} else {
    $con = mysql_connect("localhost", "root", "root") or die(mysql_error());
    $sel = mysql_select_db("bd_funshop");
    $result = @mysql_query("SELECT u.nm_usuario, u.vl_saldo FROM tb_usuario u, tb_login l "
            . "WHERE l.ds_login='$login' AND l.ds_senha='$senha' AND l.cd_usuario=u.cd_usuario") or die(mysql_error());
     
    if (mysql_num_rows($result) > 0) {
        session_start();
        $valor = mysql_fetch_array($result);
        $_SESSION["ds_email"] = $_POST["login_email"];
        $_SESSION["nm_usuario"] = $valor["nm_usuario"];
        header("Location: ../view/index.php");
    }
}