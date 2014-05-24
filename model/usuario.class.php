<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of usuario
 *
 * @author marco
 */
class usuario {
   private $cd_usuario;
   private $nm_usuario;
   private $vl_saldo;
   
   function __construct($cd_usuario, $nm_usuario, $vl_saldo) {
       $this->cd_usuario = $cd_usuario;
       $this->nm_usuario = $nm_usuario;
       $this->vl_saldo = $vl_saldo;
   }

   public function getCd_usuario() {
       return $this->cd_usuario;
   }

   public function getNm_usuario() {
       return $this->nm_usuario;
   }

   public function getVl_saldo() {
       return $this->vl_saldo;
   }

   public function setCd_usuario($cd_usuario) {
       $this->cd_usuario = $cd_usuario;
   }

   public function setNm_usuario($nm_usuario) {
       $this->nm_usuario = $nm_usuario;
   }

   public function setVl_saldo($vl_saldo) {
       $this->vl_saldo = $vl_saldo;
   }
}
