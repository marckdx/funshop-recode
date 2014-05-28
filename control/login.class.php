<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of banco
 *
 * @author Marco Aurélio
 */
include_once './conexao.class.php';

class login {

    public static function verificaLogin($login, $senha) {
        $conexao = new conexao();
        $result = mysql_query("SELECT u.nm_usuario, u.vl_saldo FROM tb_usuario u, tb_login l "
                        . "WHERE l.ds_login='$login' AND l.ds_senha='$senha' AND l.cd_usuario=u.cd_usuario");
        
        if (mysql_num_rows($result) > 0) {
            session_start();
            $valor = mysql_fetch_array($result);
            $_SESSION["ds_email"] = $login;
            $_SESSION["nm_usuario"] = $valor["nm_usuario"];
            return true;
        } else {
            return false;
        }
    }

}
