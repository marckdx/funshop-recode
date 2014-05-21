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

    public function getConnection() {
        $con = mysql_connect($servidor, $usuario, $senha);
        return $con;
    }
    
    public function doSelect($sql){
        
    }
    public function doInsert($sql){}
}
