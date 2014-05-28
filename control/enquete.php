<html>
<?php
session_start();
if ($_POST[votou] != null){ ?>
    <table>
        <tr><td>PS4</td><?php ?></tr>
        <tr><td>Xbox One</td><?php ?></tr>
        <tr><td>Wii</td><?php ?></tr>
        <tr><td>Nenhum</td><?php ?></tr>
    </table>
<?php
}else{
?>
    <form action="../cgi-bin/mycgi.pl" method="POST">
        Qual videogame voce irá comprar da próxima geração?<p>
            <input type=radio name="ps4" value="1">PS4<br>
            <input type=radio name="xbox" value="2">Xbox One<br>
            <input type=radio name="wii" value="3">Wii U<br>
            <input type=radio name="nda" value="4">Nenhum<P>
            <input type=hidden name="votou">
            <input type=submit value="Votar">
    </form>
<?php } ?>
</html>