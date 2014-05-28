<?php
session_start();
unset($_SESSION['ds_email']);
unset($_SESSION['nm_usuario']);
header("Location: index.php");
?>
