<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of login
 *
 * @author Marco Aurélio
 */
class login {
    private $cd_login;
    private $cd_usuario;
    private $ds_login;
    private $ds_senha;
    
    function __construct($cd_login, $cd_usuario, $ds_login, $ds_senha) {
        $this->cd_login = $cd_login;
        $this->cd_usuario = $cd_usuario;
        $this->ds_login = $ds_login;
        $this->ds_senha = $ds_senha;
    }
    public function getCd_login() {
        return $this->cd_login;
    }

    public function getCd_usuario() {
        return $this->cd_usuario;
    }

    public function getDs_login() {
        return $this->ds_login;
    }

    public function getDs_senha() {
        return $this->ds_senha;
    }

    public function setCd_login($cd_login) {
        $this->cd_login = $cd_login;
    }

    public function setCd_usuario($cd_usuario) {
        $this->cd_usuario = $cd_usuario;
    }

    public function setDs_login($ds_login) {
        $this->ds_login = $ds_login;
    }

    public function setDs_senha($ds_senha) {
        $this->ds_senha = $ds_senha;
    }


}
