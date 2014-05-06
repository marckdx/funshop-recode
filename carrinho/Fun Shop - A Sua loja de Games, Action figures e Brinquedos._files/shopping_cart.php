var shoppingCart = {
  async: true,
  wait: false,
	orderTotal: 0,
	indicator: false,
	contentChanged: false,
	urlCart: '',
  urlCheckout: '',

	Init: function(urlCart,urlCheckout){
			
      this.urlCart = urlCart;
			this.urlCheckout = urlCheckout;
      
      $('#btn-calc-frete').click(this.getShipping);
      $('#btn-cupom').click(this.getCart);

      var cupom = $('#cupom_codigo');
      var cupomVal = "";
      if ($.exists(cupom) && cupom.val() != "undefined") {
          cupomVal = cupom.val().replace(/[^0-9a-zA-Z\-]/gi, '');
          cupom.keypress(function (event) {
              if (event.keyCode == 13) {
                  $(this).blur().focus();
                  shoppingCart.getCart();
                  return false;
              }
          }).data('previousValue', '');
      }

      var cep = $('#cep');
      var cepVal = "";
      if ($.exists(cep) && cep.val() != "undefined") {
          cepVal = cep.val().replace(/[^0-9,-]/gi, '');
          //**
          cep.keypress(function (event) {
              if (event.keyCode == 13) {
                  $(this).blur().focus();
                  shoppingCart.getShipping();
                  return false;
              }
          }).data('previousValue', '-');
      }

      if (cepVal.length == 9) {
          cep.data('previousValue', '');
          this.getShipping();
      }
      if (cupomVal.length>0){
          cupom.data('previousValue', '');
          this.getCart();
      }
	},
  
  changeQuantity: function(campo,valor,tipo){
      var obj_campo = $("input[name='"+campo+"']");
      if (tipo==1) obj_campo.val(parseInt(obj_campo.val())+1); 
      else if (tipo==0 && parseInt(obj_campo.val()) > 0) obj_campo.val(parseInt(obj_campo.val())-1); 
      shoppingCart.getCart();
	},
  
  setCupom: function(){
  },
  
  getShipping: function(){
      var cep = $('#cep');
      if (!$.exists(cep)) return;
      var value = cep.val().replace(/[^0-9,-]/gi, '');
      if (value=="-" || value == cep.data('previousValue')) return;
      if (value.length < 9) { alert("Informe corretamente o CEP para consulta do frete."); return false; }
      cep.data('previousValue', value);
      $('.shippingMethods').slideUp(200);
     	$('.shippingMethods dd').remove();
      shoppingCart.sendData('&action=get_shipping',{cep : value},function (data){
        if (data.error) alert(data.error);
        else {
          $(".shippingMethods").append('<dd class="destination">'+html_entity_decode(data.destino)+'</dd>');
          $.each(data.options, function(i,shipping){ 
              var id     = shipping.id;
              var icone  = html_entity_decode(shipping.icone);
              var title  = html_entity_decode(shipping.title);
              var error  = html_entity_decode(shipping.error);
              var desc   = (error!="") ? error : html_entity_decode(shipping.description);
              var cost_value = shipping.cost;
              var cost_label = shipping.cost_label;
              var text_divider = html_entity_decode(shipping.text_divider);
              var selected = shipping.selected;
              var input = (error=="") ? '<input '+(selected?"checked":"")+' '+(cep.hasClass("required")?'class="validate[required]"':'')+' type="radio" value="'+id+'" id="shipping" name="shipping">' : '&nbsp;'; 
              $(".shippingMethods").append('<dd><div><span><p>'+title+'</p>:<br>'+desc+'</span><span>'+icone+'</span><span class="texto_destaque">'+cost_label+'</span><span>'+input+'</span></div></dd>')
              if (id=="free" && text_divider!="")
                  $(".shippingMethods").append('<dd>'+text_divider+'</dd>')
          });
          $("input[name=shipping]").click(function () { shoppingCart.setShipping(this.value); });
          $('.shippingMethods').slideDown('slow');
          
          shoppingCart.scroll($('#orderTotals').parent().offset().top);
        }
      });

  },
  
  setShipping: function (selected) {
      shoppingCart.sendData('&action=set_shipping',{shipping : selected},function (data){
        if (data.erro) alert(html_entity_decode(data.erro));
        else
           shoppingCart.updateCart(data);
      });     
  },
  
  removeItem: function(obj){
      var itemID = $(obj).parents('tr').attr('id');
      shoppingCart.sendData('&action=remove_product',{id_produto:itemID},function (data){
				 if (data.change_url && data.url!="") { redireciona(data.url); }
         else
	         shoppingCart.getCart();
      });
  },
  
  defineGift: function(add,id_produto,card){
      shoppingCart.sendData('&action=gift',{id_produto:id_produto,gift:(add)?1:0},function (data){
        	if (card && add){
          	abreDialog('Adicionar embalagem para presente','popup/produto_gift.php?id_produto='+id_produto,500);
        	} else 
						shoppingCart.getCart();
      });
  },
	
  updateCart: function(data){

     	$(".alert").remove();

      if (data.htmlCart)
        $("#htmlCart").html(html_entity_decode(data.htmlCart));

      if (data.smallOrder != undefined){ 
				$("#shoppingCart").before(html_entity_decode(data.smallOrder)).fadeIn(500);
			}
      
      if (data.compreJunto != undefined){ 
	      $("#compreJunto").html(html_entity_decode(data.compreJunto));
			}

      if (data.cupomDesc){
        $("#cupomDesc").html(html_entity_decode(data.cupomDesc));
	      $("#cupomDiscount").remove();
      } 
        
      if (data.cupomBox){
        $("#cupomBox").after('<li id="cupomDiscount">'+html_entity_decode(data.cupomBox)+"</li>");
      } 

      if (data.orderTotal){
        $("#orderTotals div").html(html_entity_decode(data.orderTotal));
      } 
  
  },
  
	getCart: function(data){ 
    shoppingCart.sendData('&action=update_cart',$('#shopping_cart').serialize(),function (data){
    	shoppingCart.updateCart(data);
			$('#cep').data('previousValue', '');
      shoppingCart.getShipping();
		});    				
	},
  
	checkOut : function(aceite){
  	if (aceite){
				abreDialog('Termo de aceite','popup/termos_compra.php',"60%");
        return false;
    }
		loadingMsg('Processando, aguarde ...');
		redireciona(shoppingCart.urlCheckout);
    return false;
	},
  
  scroll: function (top, fcn) {
      $('body,html').animate({scrollTop: top}, 500, 'swing', fcn);
  },
  sendData: function (param, data, fcn) {
		
   	$.ajax({
        type: 'POST',
        url: shoppingCart.urlCart+(param?param:""),
        data: data,
        dataType: 'json',
        async: shoppingCart.async,
        cache: false,
        success: fcn,
        error: function(e){ 
          alert("Atenção!\nOcorreu um problema executar sua requisição.\nTente novamente mais tarde.");
        },
        beforeSend: shoppingCart.beforeAjax,
        complete: shoppingCart.completeAjax
    });
	},
  beforeAjax: function () { 
  	loadingMsg('','.coluna_centro');
  },
  completeAjax: function (data) {
  	$('.coluna_centro').unblock(); 
  }
  
}
