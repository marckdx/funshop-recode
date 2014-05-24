<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of conexao
 *
 * @author marco
 */
class conexao {

    private $servidor;
    private $banco;
    private $usuario;
    private $senha;
    private $con;

    function __construct() {
        $this->servidor = "localhost";
        $this->banco = "bd_funshop";
        $this->usuario = "root";
        $this->senha = "root";
        $this->con = mysql_connect($this->servidor, $this->usuario, $this->senha) or die(mysql_error());
        mysql_select_db($this->banco);        
    }

    public static function doSelect($sql) {
        return mysql_query($sql) or die(mysql_error());
    }

    public function doInsert($sql) {
        mysql_query($sql) or die(mysql_error());
    }

    public function closeCon() {
        if ($this->con != null) {
            $this->destroy();
        }
    }

}
