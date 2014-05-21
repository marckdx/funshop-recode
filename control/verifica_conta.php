<?php

if(!isset($_POST["login_email"]) or !isset($_POST["login_senha"]) or $_POST["login_senha"]=="" or $_POST["login_email"]==""){
    header("Location: http://localhost/site-php-funshop/view/login.php?action=loginerror");
}else{
    
}