/* Product Variations */
var baseProduct = {};

function updateSelectedVariation(parent, variation, id) {
	if(parent == undefined) {
		parent = $('body');
	}
	else {
		parent = $(parent);
	}
	if(typeof(baseProduct.price) == 'undefined') {
		baseProduct = {
			price: $.trim($('#produto_preco', parent).html()),
			image: $.trim($('ul#product_gallery li:first a', parent).attr("href")),
			image_small: $.trim($('ul#product_gallery li:first img.etalage_thumb_image', parent).attr("src"))
		};
	}
	// Mostra variação padrao
	if(typeof(variation) == 'undefined') { 
		$('#produto_preco', parent).html(baseProduct.price);
		$('#pop_image_big').html(baseProduct.image);
		$('#product_variation', parent).val('');
	} else { 	// Mostra a variação selecionada
		$('#product_variation', parent).val(id);
		$('.produto_preco div.preco', parent).html(variation.price);
		if(variation.image) {
			$('ul#product_gallery .etalage_magnifier img', parent).attr("src",variation.image_small);
			$('ul#product_gallery li:first img.etalage_thumb_image', parent).attr("src",variation.image_small);
			$('ul#product_gallery li:first a', parent).attr("href",variation.image);
			$('ul#product_gallery li:first img.etalage_source_image', parent).attr("src",variation.image);
			$('ul#product_gallery img.etalage_zoom_img', parent).attr("src",variation.image);
			product_gallery_stopAutoplay();
		} else {
			$('ul#product_gallery .etalage_magnifier img', parent).attr("src",baseProduct.image_small);
			$('ul#product_gallery li:first img.etalage_thumb_image', parent).attr("src",baseProduct.image_small);
			$('ul#product_gallery li:first a', parent).attr("href",baseProduct.image);
			$('ul#product_gallery li:first img.etalage_source_image', parent).attr("src",baseProduct.image);
			$('ul#product_gallery img.etalage_zoom_img', parent).attr("src",baseProduct.image);
		}
		if(variation.instock == true) {
			$('.botao_comprar', parent).show();
			$('.produto_preco', parent).show();
			$('#produto_notificacao', parent).hide();
		} else {

			$('.botao_comprar', parent).hide();
			$('.produto_preco', parent).hide();
			$('#produto_notificacao', parent).show();
		}
		if (variation.cod_ref!="")
			$('#produto_cod_ref', parent).html(variation.cod_ref);

		if ($("#box_forma_pagto").length >0 ){
			loadingMsg('','#box_forma_pagto'); 
			$.ajax({  
				 type: "POST",  
				 url: "produto_info.php?action=get_bx_pagtos",
				 data: {price:variation.price_float},  
				 dataType: 'json',
				 success: function(data) { 
						$('#box_forma_pagto').unblock(); 
						$("#box_forma_pagto").replaceWith(html_entity_decode(data)).fadeIn('slow');
						$('#box_forma_pagto').easytabs();
	//			 		alert(data);
				 }  
			});    				
		}
	}
}

function initializeVariations(parent, VariationList){
	if(parent == undefined) {
		parent = $('body');
	}
	else {
		parent = $(parent);
	}

	// Select boxes are used if there is more than one variation type
	if($('#ProductOptionList select', parent).length > 0) {
		$('#ProductOptionList select', parent).each(function(index) {
			$(this).change(function() {  
				if($(this).val()) {
					var next = $('#ProductOptionList select', parent).get(index+1);
					if(next) {
						$('#ProductOptionList select', parent).get(index+1).resetNext();
						$('#ProductOptionList select', parent).get(index+1).fill();
						$('#ProductOptionList select', parent).get(index+1).disabled = false;
					}
				} else {
					this.resetNext();
				}

				// Do we have a full match?
				ourCombination = this.getFullCombination();
				for(x in VariationList) {
					variation = VariationList[x];
					if(variation.combination == ourCombination) {
						updateSelectedVariation(parent, variation, x);
						return;
					}
				}
				// No match or incomplete selection
				updateSelectedVariation(parent);
			});

			this.getFullCombination = function() {
				var selected = new Array();
				$('#ProductOptionList select', parent).each(function() {
					selected[selected.length] = $(this).val();
				});
				return selected.join(',');
			}


			this.getCombination = function() {
				var selected = new Array();
				var thisSelect = this;
				$('#ProductOptionList select', parent).each(function() {
					if(thisSelect == this) {
						return false;
					}
					selected[selected.length] = $(this).val();
				});
				// Add the current item
				selected[selected.length] = $(this).val();
				return selected.join(',');
			}

			this.resetNext = function() {
				$(this,parent).nextAll().each(function() {
					this.selectedIndex = 0;
					this.disabled = true;
				});
			};

			this.fill = function(selectedVal) {
				// Remove everything but the first option
				$(this).find('option:gt(0)').remove();

				var show = true;
				var previousSelection;

				// Get the values of the previous selects
				var previous = $('#ProductOptionList select', parent).get(index-1);
//				alert(index);
				if(index>0 && previous) {
					previousSelection = previous.getCombination();
				}
				for(var i = 1; i < this.variationOptions.length; i++) {
					for(x in VariationList) {
						variation = VariationList[x];
						if(previousSelection) {
							var show = false;
							if((variation.combination+',').indexOf(previousSelection+','+this.variationOptions[i].value+',') == 0) {
								var show = true;
								break;
							}
							else {
							}
						}
					}
					if(show) {
						this.options[this.options.length] = new Option(this.variationOptions[i].text, this.variationOptions[i].value);
					}
				}
				if(selectedVal != undefined) {
					$(this).val(selectedVal);
				}
			};

			// Steal the options and store them away for later
			variationOptions = new Array();
			$(this).find('option').each(function() {
				if(typeof(this.text) == undefined) {
					this.text = this.innerHTML;
				}
				variationOptions[variationOptions.length] = {value: this.value, text: this.text };
			});
			selectedVal = $(this).val();
			this.variationOptions = variationOptions;
			if(index == 0) {
				this.fill(selectedVal);
			}
			else if(!selectedVal) {
				this.disabled = true;
			}
		});
	}
	// Otherwise, radio buttons which are very easy to deal with
	else {
		$('#ProductOptionList input[type=radio]', parent).click(function() {
			for(x in VariationList) {
				variation = VariationList[x];
				if(variation.combination == $(this).val()) {
					updateSelectedVariation(parent, variation, x);
					return;
				}
			}
			// No match or incomplete selection
			updateSelectedVariation(parent);
		});
		$('#ProductOptionList input[type=radio]:checked', parent).trigger('click');
	}
}

function CheckProductForm(idProduct,form,required,onlyReturn){
	if(required && !$(form).find('#product_variation').val()) {
		alert("É necessário selecionar a variação do produto desejado!");
		var select = $(form).find('select').get(0);
		if(select) { select.focus(); }
		var radio = $(form).find('input[type=radio]').get(0);
		if(radio) {	radio.focus(); }
		return false;
	} else if(required && !VariationList[$(form).find('#product_variation').val()].instock){
		alert("Este produto está sem estoque disponível!");
		return false;
	}
	if (onlyReturn) return true;
	if (checkRequiredFields()){
			var obj = ".botao_comprar";
			var html_old = $(obj).html();
		  loadingAjax(obj, "Aguarde...", "center");
			$.ajax({  
				 type: "POST",  
				 url: $(form).attr('action'),  
				 data: $(form).serialize(),  
				 dataType: 'json',
				 success: function(resposta) { 
						if (resposta.change_url) redireciona(resposta.url);
						else {
						  $(obj).html(html_old);
							abreDialog('Produto adicionado ao seu carrinho de compras!','popup/produto_addcart.php?frame=true&id_produto='+resposta.product_cart_id+'&variacao='+$('#product_variation').val(),700);
						}
				 }  
			});    				
  }
	return false;
}

function calcularFrete(id_produto){
	abreDialog('Cálculo de Frete','popup_calcular_frete.php?frame=true&id_produto='+id_produto+'&variacao='+$('#product_variation').val());
}
function formaPagto(id_produto){ 
	abreDialog('Formas de pagamento disponíveis:','popup/formas_pagamento.php?id_produto='+id_produto+'&variacao='+$('#product_variation').val(),400);
}

function addProdutoLista(check_options,id_lista,id_produto){
	if (CheckProductForm(id_produto,document.forms["detalhe_produto"],check_options,true)){
		document.forms.detalhe_produto.action = "minhaconta.php?action=my_lists&id_lista="+id_lista+"&id_produto="+id_produto+"&subaction=add_product_list";
		document.forms.detalhe_produto.submit();
	}
	return false;
}

function questionProduct(id_produto){
	abreDialog('Dúvidas sobre o produto','popup/produto_question.php?id_produto='+id_produto,400);
}
function commendProduct(id_produto){
	abreDialog('Indicar este produto','popup/produto_commend.php?id_produto='+id_produto,700);
}