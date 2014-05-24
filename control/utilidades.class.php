<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of utilidades
 *
 * @author Marco Aurélio
 */
class utilidades {

    public static function getSaudacao() {
        $hour = date(' H ');
        if($hour >= 24 && $hour <= 11){
            return "Bom dia";
        }else if($hour > 12 && $hour <= 18){
            return "Boa tarde";
        }else if($hour > 19 && $hour <= 23){
            return "Boa noite";
        }else{
            return "Olá";
        }
    }

}
