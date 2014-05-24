<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of produto
 *
 * @author marco
 */
class produto {

    private $cd_produto;
    private $nm_produto;
    private $ds_produto;
    private $qt_produto;
    private $vl_produto;
    private $pc_desconto_produto;
    private $st_produto;
    private $ds_garantia_produto;

    function __construct($cd_produto, $nm_produto, $ds_produto, $qt_produto, $vl_produto, $pc_desconto_produto, $st_produto, $ds_garantia_produto) {
        $this->cd_produto = $cd_produto;
        $this->nm_produto = $nm_produto;
        $this->ds_produto = $ds_produto;
        $this->qt_produto = $qt_produto;
        $this->vl_produto = $vl_produto;
        $this->pc_desconto_produto = $pc_desconto_produto;
        $this->st_produto = $st_produto;
        $this->ds_garantia_produto = $ds_garantia_produto;
    }

    public function getCd_produto() {
        return $this->cd_produto;
    }

    public function getNm_produto() {
        return $this->nm_produto;
    }

    public function getDs_produto() {
        return $this->ds_produto;
    }

    public function getQt_produto() {
        return $this->qt_produto;
    }

    public function getVl_produto() {
        return $this->vl_produto;
    }

    public function getPc_desconto_produto() {
        return $this->pc_desconto_produto;
    }

    public function getSt_produto() {
        return $this->st_produto;
    }

    public function getDs_garantia_produto() {
        return $this->ds_garantia_produto;
    }

    public function setCd_produto($cd_produto) {
        $this->cd_produto = $cd_produto;
    }

    public function setNm_produto($nm_produto) {
        $this->nm_produto = $nm_produto;
    }

    public function setDs_produto($ds_produto) {
        $this->ds_produto = $ds_produto;
    }

    public function setQt_produto($qt_produto) {
        $this->qt_produto = $qt_produto;
    }

    public function setVl_produto($vl_produto) {
        $this->vl_produto = $vl_produto;
    }

    public function setPc_desconto_produto($pc_desconto_produto) {
        $this->pc_desconto_produto = $pc_desconto_produto;
    }

    public function setSt_produto($st_produto) {
        $this->st_produto = $st_produto;
    }

    public function setDs_garantia_produto($ds_garantia_produto) {
        $this->ds_garantia_produto = $ds_garantia_produto;
    }

}
