<?php
if ($_SERVER["REQUEST_METHOD"] != 'POST' || $_REQUEST['keywords'] == "") {
    echo "Não há busca";
} else {
    $con = new conexao();
    $busca = $_REQUEST['keywordds'];
    $result = mysql_query("SELECT * FROM tb_produto WHERE nm_produto LIKE'%" . $busca . "%' OR ds_produto LIKE'%" . $busca . "%'");
    $cont = 1;
    
    ?> <tbody><tr>
        <td>Mostrando <b>1</b> para <b><?php mysql_num_rows($result);?></b> (de <b>29</b> registros)</td>
        <td align="right">&nbsp;<span class="pagina_atual"><b>1</b></span>&nbsp;&nbsp;&nbsp;</td>
    </tr>
</tbody></table>
    <?php
    while ($valor = mysql_fetch_array($result)) {
        ?>
<!--imagem divisão-->
<?php if($cont%4==0){ ?>
<img src="../img/pixel_trans.gif" border="0" alt="" width="100%" height="10">
<?php }?>
<div class="box_template">
    <div class="content" style="color:#000000;background:none;border-bottom:1px dotted #cccccc;" data-itens="4">
        <ul class="content-itens">
            <li style="width: 24%; height: 351px; overflow: auto;">
                <div class="item_box_produto">
                    <a href="http://localhost/headset-sony-gold-71-wireless-ps4_ps3_ps-vita-p3037">
                        <div class="imagem" style="height: 160px; overflow: auto;"><img src="../img/1398777114-160x160-headset_sony_gold_wireless_ps4_1.jpg" border="0" alt="Headset Sony Gold 7.1 Wireless PS4/PS3/PS Vita" title="Headset Sony Gold 7.1 Wireless PS4/PS3/PS Vita" width="160" height="160"></div>

                        <b><div class="nome">Headset Sony Gold 7.1 Wireless PS4/PS3/PS Vita</div>
                        </b>
                        <small></small>
                    </a>
                    <div class="preco" style="float:none;margin:4px;">R$&nbsp;490,00</div>
                    <div class="pagto"><span class="txt_desconto">em até <b>24x</b> de <b>R$&nbsp;25,52</b>  no cartão ou <b>R$&nbsp;465,50</b> à vista com <b>5%</b> desconto</span></div>



                    <div class="marks"><img src="../img/lancamento.gif" border="0" alt="" width="114" height="39"></div>

                    <div class="avaliacao"><img src="../img/stars_0.png" border="0" alt="" width="83" height="15"></div>

                    <a id="bt_mais_detalhes" style="display:block;" href="http://localhost/headset-sony-gold-71-wireless-ps4_ps3_ps-vita-p3037" title="Mais detalhes"><img src="../img/icone_detalhes.png" border="0" alt="Mais detalhes" title="Mais detalhes" width="62" height="21"></a>

                </div>
            </li>

    </div>

</div>
<!--Imagem de divisão-->
<?php if($cont%4==0){ ?>
<img src="../img/pixel_trans.gif" border="0" alt="" width="100%" height="10">
<?php }?>
<table border="0" width="100%" cellspacing="0" cellpadding="0" class="paginacao">
    <tbody><tr>
            <td>Mostrando <b>1</b> para <b>20</b> (de <b>29</b> registros)</td>
            <td align="right">&nbsp;<span class="pagina_atual"><b>1</b></span>&nbsp;&nbsp;&nbsp;</td>

        <?php
       
     $cont++;  
    }
}
?>                   





