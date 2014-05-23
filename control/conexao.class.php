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

    private $servidor = "localhost";
    private $banco = "bd_funshop";
    private $usuario = "root";
    private $senha = "root";

    public function __construct() {
        $con = mysql_connect($servidor, $usuario, $senha);
        return $con;
    }

    public function doSelect($sql) {
       $result =  mysql_query($query);
       
    }

    public function doInsert($sql) {
        
    }

    public function closeCon() {
        if ($con != null) {
            destroy();
        }
    }

}
