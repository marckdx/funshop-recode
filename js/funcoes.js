String.PAD_LEFT  = 0;
String.PAD_RIGHT = 1;
String.PAD_BOTH  = 2;

String.prototype.pad = function(size, pad, side) {
  var str = this, append = "", size = (size - str.length);
  var pad = ((pad != null) ? pad : " ");
  if ((typeof size != "number") || ((typeof pad != "string") || (pad == ""))) {
    throw new Error("Wrong parameters for String.pad() method.");
  }
  if (side == String.PAD_BOTH) {
    str = str.pad((Math.floor(size / 2) + str.length), pad, String.PAD_LEFT);
    return str.pad((Math.ceil(size / 2) + str.length), pad, String.PAD_RIGHT);
  }
  while ((size -= pad.length) > 0) {
    append += pad;
  }
  append += pad.substr(0, (size + pad.length));
  return ((side == String.PAD_LEFT) ? append.concat(str) : str.concat(append));
}

Number.prototype.format = function(d_len, d_pt, t_pt) {
  var d_len = d_len || 0;
  var d_pt = d_pt || ".";
  var t_pt = t_pt || ",";
  if ((typeof d_len != "number")
    || (typeof d_pt != "string")
    || (typeof t_pt != "string")) {
    throw new Error("wrong parameters for method 'String.pad()'.");
  }
  var integer = "", decimal = "";
  var n = new String(this).split(/\./), i_len = n[0].length, i = 0;
  if (d_len > 0) {
    n[1] = (typeof n[1] != "undefined") ? n[1].substr(0, d_len) : "";
    decimal = d_pt.concat(n[1].pad(d_len, "0", String.PAD_RIGHT));
  }
  while (i_len > 0) {
    if ((++i % 3 == 1) && (i_len != n[0].length)) {
      integer = t_pt.concat(integer);
    }
    integer = n[0].substr(--i_len, 1).concat(integer);
  }
  return (integer + decimal);
}

String.prototype.formatNumber = function(dec){
	var str = this;
	if (dec == 0 || dec == null)
	{
		dec = 2;
	
	}
	if (str != null)
	{
		str = str.Clear("d");
		var div = "";
		var result = "";
		var cont = 0;
		for (var i = str.length; i>-1;i--)
		{
			cont++;
			if (result.length == dec && div == "")
			{
				div = ",";
				result = div + result;
				div = ".";
				cont = 0;
			}else
				if (cont == 3)
				{
					result = div + result;
					cont = 0;
				}
				
			result = str.charAt(i) + result;
		}

		if (result == "undefined") result = " ";
		
		return result;
	}
}

String.prototype.Clear = function(char){
	var str = this;
	if (char == "d")
		var dig = /[0-9]/;
	else if(char == "c")
		var dig = /[A-Z]/i;
		
	if (str != null)
	{
		var text = '';
		var result = '';
		for (var i=0; i<str.length;i++)
		{
			text = str.charAt(i);
			if (char == "d" || char == "c")
			{
				if (dig.test(text))
					result += text;
			}
			else
			{
				if (text != char)
					result += text;
			}
		}
		
		if (result == "undefined") result = " ";
		return result;
	}
}

this.Sleep = function zZz(naptime){
		var sleeping = true;
		var now = new Date();
		var alarm;
		var startingMSeconds = now.getTime();
		while(sleeping){
			 alarm = new Date();
			 alarmMSeconds = alarm.getTime();
			 if(alarmMSeconds - startingMSeconds > naptime){ sleeping = false; }
		}      
}

String.prototype.trim = function(){
  return this.replace(/^\s*/, "").replace(/\s*$/, "");
}

function replaceAll(str, de, para){
    var pos = str.indexOf(de);
    while (pos > -1){
		str = str.replace(de, para);
		pos = str.indexOf(de);
	}
    return (str);
}


function isset(varname)  {
  if(typeof( window[ varname ] ) != "undefined") return true;
  else return false;
}

function isArray(o){
	return (typeof(o.length)=="undefined")? false : true;
}
 
function getFormValues(frm){
    var objForm;
		var submitDisabledElements = false;
		var prefix="";
		if (arguments.length > 1 && arguments[1] == true) submitDisabledElements = true;
		if (arguments.length > 2) prefix = arguments[2];
		if (typeof(frm) == "string") objForm = document.getElementById(frm);
		else
			objForm = frm;
		var sXml = "";
		if (objForm && objForm.tagName == 'FORM'){
			var formElements = objForm.elements;
			for( var i=0; i < formElements.length; i++){
				if (!formElements[i].name) continue;
				if (formElements[i].name.substring(0, prefix.length) != prefix) continue;
				if (formElements[i].type && (formElements[i].type == 'radio' || formElements[i].type == 'checkbox') && formElements[i].checked == false) continue;
				if (formElements[i].disabled && formElements[i].disabled == true && submitDisabledElements == false) continue;
				var name = formElements[i].name; 
				if (name)	{
					if (sXml != '') sXml += '#';
					if(formElements[i].type=='select-multiple'){
						for (var j = 0; j < formElements[i].length; j++){
							if (formElements[i].options[j].selected == true)
								sXml += name+"="+encodeURIComponent(formElements[i].options[j].value)+"#";
						}
					}	else {
						sXml += name+"="+encodeURIComponent(formElements[i].value);
					}
				} 
			}
		}
		return sXml.split('#');
}

function UR_Start(){
	UR_Nu = new Date;
	UR_Indhold = showFilled(UR_Nu.getHours()) + ":" + showFilled(UR_Nu.getMinutes()) + ":" + showFilled(UR_Nu.getSeconds());
	document.getElementById("hora").innerHTML = UR_Indhold;
	setTimeout("UR_Start()",1000);
}
function showFilled(Value) 
{
	return (Value > 9) ? "" + Value : "0" + Value;
}

function abremenu(id,total){
	var menu;
	for (i=1;i<=total;i++){
		menu = document.getElementById("menu_"+id).style.display;
		if (i != id)
  	  $("#menu_"+i).hide();
		else
      $("#menu_"+id).animate( {  height: 'toggle', opacity: 'show' }, 100);
	}
}
function pesquisar(id_grid,callback){
 id_grid = id_grid || "grid";
 var valores  = getFormValues("frmpesquisa");
 HTML_AJAX.replace(id_grid, 'gridajax', 'search', valores,id_grid);
 return false;
}

function retiraAcento(varString){
	var stringAcentos = new String("àâêôûãõáéíóúçüÀÂÊÔÛÃÕÁÉÍÓÚÇÜ[]");
	var stringSemAcento = new String("aaeouaoaeioucuAAEOUAOAEIOUCU");
	var cString = new String();
	var varRes ="";
	
	for (i = 0; i < varString.length; i++) {
	cString = varString.substring(i, i + 1);
	for (j = 0; j < stringAcentos.length; j++) {
	if (stringAcentos.substring(j, j + 1) == cString){
	cString = stringSemAcento.substring(j, j + 1);
	}
	}
	varRes += cString;
	}
	return varRes;
}

function texto(objeto, texto){
	objeto.value = texto;
	if (texto == '') objeto.className = 'campoTexto';
	else objeto.className = 'campoTexto campoSemCor';
}

function textoBlur(objeto, texto){
	if (objeto.value == '')
		objeto.value = texto;

	if (texto == '')
		objeto.className = 'campoTexto';
	else
		objeto.className = 'campoTexto campoSemCor';
}


function autoTab(input, e) {
  var isNN = (navigator.appName.indexOf("Netscape")!=-1);
	var keyCode = (isNN) ? e.which : e.keyCode;
	var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
	var indice;
	var campo;
	var i=1;
	if(input.value.length >= input.maxLength && !containsElement(filter,keyCode)) {
   	input.value = input.value.slice(0, input.maxLength);
    indice = getIndex(input);
		campo = input.form[(indice+i) % input.form.length];
		campo.focus();
	}
  function containsElement(arr, ele) {
		var found = false, index = 0;
		while(!found && index < arr.length)
		if(arr[index] == ele)
		found = true;
		else
		index++;
		return found;
  }
  function getIndex(input) {
		var index = -1, i = 0, found = false;
		while (i < input.form.length && index == -1)
		if (input.form[i] == input)index = i;
		else i++;
		return index;
	}
	return true;
}

function Limpar(valor, validos) {
	// retira caracteres invalidos da string
	var result = "";
	var aux;
	for (var i=0; i < valor.length; i++) {
   	aux = validos.indexOf(valor.substring(i, i+1));
		if (aux>=0) {
			result += aux;
		}
	}
	return result;
}

function FormataValor(campo,tammax,teclapres,dec) {
		dec=dec || 2; 
		var objTextBox = campo;
		var SeparadorDecimal = ",";
		var SeparadorMilesimo = ".";
    var sep = 0;
    var key = '';
    var i = j = 0;
    var len = len2 = 0;
    var strCheck = '0123456789';
    var aux = aux2 = '';
    var whichCode = (window.event) ? teclapres.keyCode : teclapres.which;    
    // 13=enter, 8=backspace as demais retornam 0(zero)
    // whichCode==0 faz com que seja possivel usar todas as teclas como delete, setas, etc    
    if ((whichCode == 13) || (whichCode == 0) || (whichCode == 8))	return true;

		key = String.fromCharCode(whichCode); // Valor para o código da Chave
    if (strCheck.indexOf(key) == -1) return false; // Chave inválida
    len = objTextBox.value.length;
    for(i = 0; i < len; i++) if ((objTextBox.value.charAt(i) != '0') && (objTextBox.value.charAt(i) != SeparadorDecimal)) 	break;
    aux = '';
    for(; i < len; i++) if (strCheck.indexOf(objTextBox.value.charAt(i))!=-1) aux += objTextBox.value.charAt(i);
    aux += key;
    len = aux.length;
    if (len == 0) 
    	objTextBox.value = '';
    if (len == 1) 
    	objTextBox.value = (dec==2) ? '0'+ SeparadorDecimal + '0' + aux : '0'+ SeparadorDecimal + '00' + aux;
    if (len == 2) 
    	objTextBox.value = (dec==2) ? '0'+ SeparadorDecimal + aux : '0'+ SeparadorDecimal + '0' + aux;
    if (len == 3 && dec == 3) 
    	objTextBox.value = '0'+ SeparadorDecimal + aux;
//    	objTextBox.value = '0'+ SeparadorDecimal + aux;
    if (len > dec) {
        aux2 = '';
        for (j = 0, i = len - (dec+1); i >= 0; i--) {
            if (j == 3) {
                aux2 += SeparadorMilesimo;
                j = 0;
            }
            aux2 += aux.charAt(i);
            j++;
        }
        objTextBox.value = '';
        len2 = aux2.length;
        for (i = len2 - 1; i >= 0; i--) objTextBox.value += aux2.charAt(i);
        objTextBox.value += SeparadorDecimal + aux.substr(len - dec, len);
    }
    return false;
}

/***
* Descrição.: formata um campo do formulário de
* acordo com a máscara informada...
* Parâmetros: - objForm (o Objeto Form)
* - strField (string contendo o nome do textbox)
* - sMask (mascara que define o
* formato que o dado será apresentado, usando o algarismo "9" para definir números e o símbolo "!" para qualquer caracter...
* - evtKeyPress (evento)
* Uso.......: <input type="textbox"
* name="xxx".....
* onkeypress="return txtBoxFormat(document.rcfDownload, 'str_cep', '99999-999', event);">
* Observação: As máscaras podem ser representadas como os exemplos abaixo:
* CEP -> 99.999-999
* CPF -> 999.999.999-99
* CNPJ -> 99.999.999/9999-99
* Data -> 99/99/9999
* Tel Resid -> (99) 999-9999
* Tel Cel -> (99) 9999-9999
* Processo -> 99.999999999/999-99
* C/C -> 999999-!
* E por aí vai...
***/
function txtFormat(strField, sMask, evtKeyPress) {
	var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;
	var isNN = (navigator.appName.indexOf("Netscape")!=-1);
	nTecla = (isNN) ? evtKeyPress.which : evtKeyPress.keyCode;
	sValue = strField.value;
	// Limpa todos os caracteres de formatação que
	// já estiverem no campo.
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( "-", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( ".", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "/", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( "(", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( ")", "" );
	sValue = sValue.toString().replace( " ", "" );
	sValue = sValue.toString().replace( " ", "" );
	fldLen = sValue.length;
	mskLen = sMask.length;
	i = 0;
	nCount = 0;
	sCod = "";
	mskLen = fldLen;

	while (i <= mskLen) {
		bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
		bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
		if (bolMask) {
			sCod += sMask.charAt(i);
			mskLen++; }
		else {
			sCod += sValue.charAt(nCount);
			nCount++;
		}
		i++;
	}
	if (nTecla != 8) { // backspace
		strField.value = sCod;
		if (sMask.charAt(i-1) == "9") { // apenas números...
			return (((nTecla > 47) && (nTecla < 58)) || (nTecla == 0)); } // números de 0 a 9
		else { // qualquer caracter...
			return true;
		} }
	else {
		return true;
	}
}
//Fim da Função Máscaras Gerais

function imprime(url){
  Left = (window.screen.availWidth - 770) / 2 - 40;
	window.open(url,'Popup', 'width=770, height=630, top=50, left='+Left+', scrollbars=true, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=yes, fullscreen=no');
}

function abrepopup(URL,Width,Height,Scroll,Resizable){
  Left = (window.screen.availWidth - Width) / 2 - 13;
	Top  = (window.screen.availHeight - Height) / 2
	return window.open(URL,'Popup', 'width='+Width+', height='+Height+', top='+Top+', left='+Left+', scrollbars='+(Scroll || 'no')+', status=no, toolbar=no, location=no, directories=no, menubar=no, resizable='+(Resizable || 'no')+', fullscreen=no');
}

function campoFocus(campo){
	var label = document.getElementById(campo.id+"_label") || null;
	if (label != null){
	 label.style.color = (label.style.color == "#000000" || label.style.color == "") ? "#003399" : "#000000";
	}
}

function mudaCorFonte(objeto){ 
	objeto.style.color = (objeto.style.color == "#0099cc") ? "#000000" : "#0099cc";
	objeto.style.cursor= (objeto.style.cursor == "pointer") ? "default" : "pointer";
//	objeto.className = (objeto.className == "linha_comum") ? "linha_selecionada" : "linha_comum";
}

function mudaCorFundo(objeto,classe){
	objeto.className = (objeto.className == classe) ? "linha_selecionada" : classe;
}

function campoAguarde(campo,status){
	if (status == 1) {
		if($('#'+campo).select2){
			$('#'+campo).select2("disable");
		} else {
	    document.getElementById(campo).disabled = true;
			document.getElementById(campo).value = 'Aguarde...';
		}
	} else {
		if($('#'+campo).select2){
			$('#'+campo).select2("enable");
		} else {
	    document.getElementById(campo).disabled = false;
		}
	}
}

function executa_funcao(form,funcao){
	submitonce(form,true);
	var valores  = getFormValues(form); 
	var resposta = agent.call("",funcao,"",valores);
	resposta = resposta.split("#");
	if (resposta[0]=="ok"){ 
			if (resposta[1]!="") alert(resposta[1]);
			return true;
	} else {
			if (resposta[1]!=null) alert(resposta[1]);
			else if (resposta!="") alert(resposta);
			submitonce(form,false);
			return false;
	} 	
}

function buscaCep(){
  var cep = $("#cep").val();

  if (cep.length<9){
		$("#cep_hint").html("<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>");
	} else if (cep != ""){
			campoAguarde('endereco',1);
			campoAguarde('bairro',1);
			campoAguarde('cidade',1);
			campoAguarde('estado',1);
			$.ajax({  
				 type: "GET",  
				 url: dir_fwiset+"rotinas/buscacep.php",  
				 data: {cep:cep},  
				 //dataType:"xml",
				 error: function (data,message) {
						alert("Ocorreu um erro no processo: "+message);
				 },
				 beforeSend: function(data){ 
			      $("#cep_hint").html("<div style='color:#666666;font-size:11px;vertical-align:middle;display:inline-block;'><img style='vertical-align:middle;' src='"+dir_fwiset+"imagens/login_small_search.gif' border=0>&nbsp;Pesquisando endereço...</div>");
				 },
				 success: function(data) {
						if ($('cidade', data).text() != "") {
								$("#endereco").val($('tipo_logradouro', data).text()+" "+$('logradouro', data).text());
								$("#bairro").val($('bairro', data).text());
								$("#cidade").val($('cidade', data).text());
								if($('#estado').select2){
									$('#estado').select2("val",$('estado', data).text());
								} else {
									$("#estado").val($('estado', data).text());
								}
								$("#cep_hint").html("<img src='"+dir_fwiset+"imagens/ok.gif' width='16' height='16'>");
								campoAguarde('endereco',0);
								campoAguarde('bairro',0);
								campoAguarde('cidade',0);
								campoAguarde('estado',0);
								campoFocus(document.getElementById("cep"));
								document.getElementById("numero").focus();
								return true;
						} else {
								$("#cep_hint").html("<img src='"+dir_fwiset+"imagens/alerta.gif' width='16' height='16'>");
								$("#endereco").val("");
								$("#bairro").val("");
								$("#cidade").val("");
								if($('#estado').select2)
									$('#estado').select2("val","MG");
								else	
									$("#estado").val("MG");
								campoAguarde('endereco',0);
								campoAguarde('bairro',0);
								campoAguarde('cidade',0);
								campoAguarde('estado',0);
								campoFocus(document.getElementById("cep"));
								document.getElementById("endereco").focus();
								return false;
						}
				 }
			});    				
	}
}

function addInput(form,name,value){
	if (document.getElementById(name)) document.getElementById(form).removeChild(document.getElementById(name));
	document.getElementById(form).appendChild(inputHidden(name,value));
}

function inputHidden(name,value){
	var currentElement = document.createElement("input");
	currentElement.setAttribute("type", "hidden");
	currentElement.setAttribute("name", name);
	currentElement.setAttribute("id", name);
	currentElement.setAttribute("value", value);
	return currentElement;
}	

function redireciona(url){
	window.location.replace(url);
}

function submitonce(form,disable){
	if (typeof(form) == "string") form = document.getElementById(form);
	if (form){
		var formElements = form.elements;
		for( var i=0; i < formElements.length; i++){
					if (formElements[i].type && (formElements[i].type.toLowerCase() == 'submit' || formElements[i].type.toLowerCase()=="reset"))
					var name = formElements[i].disabled=disable;
		}
	}
}

function FormataMoeda(valor,tipo){
	 valor = valor.toString();
	 if (tipo == 1){ // retorna 0,00
	    if (valor.indexOf(",") < valor.indexOf(".")){
        valor = valor.replace(",",""); 
				valor = parseFloat(valor);
				valor = valor.format(2, ",", ".");
			} else {
        valor = valor.replace(".",""); 
				valor = valor.replace(",",".");
				valor = parseFloat(valor);
				valor = valor.format(2, ",", ".");
			}
	 } else	{ //retorna 0.00
	    if (valor.indexOf(",") < valor.indexOf(".")){ 
        valor = valor.replace(",",""); 
				valor = parseFloat(valor);
				valor = valor.format(2, ".", "");
			} else {
        valor = valor.replace(".",""); 
				valor = valor.replace(",",".");
				valor = parseFloat(valor);
			}
	 }
	 return valor;
}

function dumpProps(obj, parent) {
   // Go through all the properties of the passed-in object 
   for (var i in obj) {
      // if a parent (2nd parameter) was passed in, then use that to 
      // build the message. Message includes i (the object's property name) 
      // then the object's property value on a new line 
      if (parent) { var msg = parent + "." + i + "\n" + obj[i]; } else { var msg = i + "\n" + obj[i]; }
      // Display the message. If the user clicks "OK", then continue. If they 
      // click "CANCEL" then quit this level of recursion 
      if (!confirm(msg)) { return; }
      // If this property (i) is an object, then recursively process the object 
      if (typeof obj[i] == "object") { 
         if (parent) { dumpProps(obj[i], parent + "." + i); } else { dumpProps(obj[i], i); }
      }
   }
}

/**************************************************************************
Função para simular um Tab quando for pressionado a tecla Enter
Exemplo: onKeyDown="TABEnter()"
Funciona em TEXT BOX,RADIO BUTTON, CHECK BOX e menu DROP-DOWN
**************************************************************************/
function TABEnter(oEvent){
  var oEvent = (oEvent)? oEvent : event;
  var oTarget =(oEvent.target)? oEvent.target : oEvent.srcElement;
  if(oEvent.keyCode==13)
    oEvent.keyCode = 9;
  if(oTarget.type=="text" && oEvent.keyCode==13)
    //return false;
    oEvent.keyCode = 9;
  if (oTarget.type=="radio" && oEvent.keyCode==13)
    oEvent.keyCode = 9;
}

function setValueField(campo,valor,pasta_raiz){ 
	  var begin = String(valor).lastIndexOf(pasta_raiz+"/")+String(pasta_raiz).length+1;
		valor = valor.substring(begin,valor.length);
		document.getElementById(campo).value=valor;
}

function str2xml(sXml){
	// If the specified XML document content is a string...
	if ( typeof sXml == "string" ) {
		var oXml; // Reference to the parsed XML document
		// If the current browser is Internet Explorer...
		if ( window.ActiveXObject ) {
			// Create a reference to the Microsoft XML Document Object Model.
			oXml = new ActiveXObject( "Microsoft.XMLDOM" );
			// Assign the flag to process the XML synchronously.
			oXml.async = "false";
			// Load the XML document with the content from the specified string.
			oXml.loadXML( sXml );
		} else { // Current browser is Mozilla, Firefox, Opera, etc.
			// Create a reference to the XML document parser.
			var oParser = new DOMParser();
			// Parse the XML string and return a reference to the XML document.
			oXml = oParser.parseFromString( sXml, "text/xml" );
		}
		// Return the reference to the XML document.
		return oXml;
	}	else { // XML document content is NOT a string...
	 // Return the specified XML document since it has already been parsed.
	 return sXml;
	}
}

function checkMail(str){var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;if(filter.test(str))valido=true;else{valido=false}return valido;}
function loadJsAjax(texto){var ini,pos_src,fim,codigo;var objScript=null;ini=texto.indexOf('<script',0);while(ini!=-1){ var objScript=document.createElement("script");pos_src=texto.indexOf(' src',ini);ini=texto.indexOf('>',ini)+1;if(pos_src<ini&&pos_src>=0){ini=pos_src+4;fim=texto.indexOf('></script>',ini)+1;codigo=texto.substring(ini,fim);codigo=codigo.replace("=","").replace(" ","").replace("\"","").replace("\"","").replace("\'","").replace("\'","").replace(">","");objScript.src=codigo.trim();}else{fim=texto.indexOf('</script>',ini);codigo=texto.substring(ini,fim);objScript.text=codigo.trim();}
document.body.appendChild(objScript);ini=texto.indexOf('<script',fim);objScript=null}}

function loadingMsg(msg,obj,onBlock,onUnblock){
	var cssObj,cssOverlay;
	if (obj){
		cssObj = { border: '0',background:'none','-moz-opacity': '0.2', '-khtml-opacity': '0.2', 'opacity': '0.2', 'filter': 'alpha(opacity=20)' };
		cssOverlay = {'background': '#FFFFFF',opacity:0.7};
	} else {
		cssObj = {
			'-moz-opacity': 0.5,
			'-khtml-opacity':0.5,
			'opacity' :0.5,
			'filter' :'alpha(opacity=50)',
			'backgroundColor' : 'black',
			'-webkit-border-radius' : '8px',
			'-moz-border-radius' : '8px',
			'-o-border-radius' : '8px',
			'-khtml-border-radius' : '8px',
			'border-radius' : '8px',
			'-pie-lazy-init':true,
			'color':'white',
			'font-size':'12px',
			'font-family':'Arial, Helvetica, sans-serif',
			'-webkit-background-clip':'',
			'padding':'10px'
		}
		cssOverlay = {'background': '#000000 url(/imagens/dialog/bg_lock_dialog.png) 0 0 repeat',opacity:0.2};
	}
//		cssOverlay = {border:'1px solid #000','background': '#000000 url(/imagens/dialog/bg_lock_dialog.png) 0 0 repeat',opacity:0.2};
		
	msg = (msg)?"<image border=0 src='"+dir_fwiset+"imagens/loadingBig.gif'><br>"+msg:"<image border=0 src='"+dir_fwiset+"imagens/loadingBig.gif'>";
	if (obj && $(obj))
		$(obj).block({ message: msg, css: cssObj, overlayCSS: cssOverlay,onBlock:onBlock,onUnblock:onUnblock }); 
	else
		$.blockUI({ message: msg, css: cssObj, overlayCSS: cssOverlay,onBlock:onBlock,onUnblock:onUnblock }); 

//	if(!document.getElementById('wait-block'))createLoading();document.getElementById('wait-txt').innerHTML=msg;$('#wait-block').show();$('#wait').show();
}


function get_html_translation_table (table, quote_style) {
  var entities = {}, hash_map = {}, decimal = 0, symbol = '';
    var constMappingTable = {}, constMappingQuoteStyle = {};
    var useTable = {}, useQuoteStyle = {};
    
    // Translate arguments
    constMappingTable[0]      = 'HTML_SPECIALCHARS';
    constMappingTable[1]      = 'HTML_ENTITIES';
    constMappingQuoteStyle[0] = 'ENT_NOQUOTES';
    constMappingQuoteStyle[2] = 'ENT_COMPAT';
    constMappingQuoteStyle[3] = 'ENT_QUOTES';
    
    useTable       = !isNaN(table) ? constMappingTable[table] : table ? table.toUpperCase() : 'HTML_SPECIALCHARS';
    useQuoteStyle = !isNaN(quote_style) ? constMappingQuoteStyle[quote_style] : quote_style ? quote_style.toUpperCase() : 'ENT_COMPAT';
    
    if (useTable !== 'HTML_SPECIALCHARS' && useTable !== 'HTML_ENTITIES') {
        throw new Error("Table: "+useTable+' not supported');
        // return false;
    }
    
    entities['38'] = '&amp;';
    if (useTable === 'HTML_ENTITIES') {
        entities['160'] = '&nbsp;';
        entities['161'] = '&iexcl;';
        entities['162'] = '&cent;';
        entities['163'] = '&pound;';
        entities['164'] = '&curren;';
        entities['165'] = '&yen;';
        entities['166'] = '&brvbar;';
        entities['167'] = '&sect;';
        entities['168'] = '&uml;';
        entities['169'] = '&copy;';
        entities['170'] = '&ordf;';
        entities['171'] = '&laquo;';
        entities['172'] = '&not;';
        entities['173'] = '&shy;';
        entities['174'] = '&reg;';
        entities['175'] = '&macr;';
        entities['176'] = '&deg;';
        entities['177'] = '&plusmn;';
        entities['178'] = '&sup2;';
        entities['179'] = '&sup3;';
        entities['180'] = '&acute;';
        entities['181'] = '&micro;';
        entities['182'] = '&para;';
        entities['183'] = '&middot;';
        entities['184'] = '&cedil;';
        entities['185'] = '&sup1;';
        entities['186'] = '&ordm;';
        entities['187'] = '&raquo;';
        entities['188'] = '&frac14;';
        entities['189'] = '&frac12;';
        entities['190'] = '&frac34;';
        entities['191'] = '&iquest;';
        entities['192'] = '&Agrave;';
        entities['193'] = '&Aacute;';
        entities['194'] = '&Acirc;';
        entities['195'] = '&Atilde;';
        entities['196'] = '&Auml;';
        entities['197'] = '&Aring;';
        entities['198'] = '&AElig;';
        entities['199'] = '&Ccedil;';
        entities['200'] = '&Egrave;';
        entities['201'] = '&Eacute;';
        entities['202'] = '&Ecirc;';
        entities['203'] = '&Euml;';
        entities['204'] = '&Igrave;';
        entities['205'] = '&Iacute;';
        entities['206'] = '&Icirc;';
        entities['207'] = '&Iuml;';
        entities['208'] = '&ETH;';
        entities['209'] = '&Ntilde;';
        entities['210'] = '&Ograve;';
        entities['211'] = '&Oacute;';
        entities['212'] = '&Ocirc;';
        entities['213'] = '&Otilde;';
        entities['214'] = '&Ouml;';
        entities['215'] = '&times;';
        entities['216'] = '&Oslash;';
        entities['217'] = '&Ugrave;';
        entities['218'] = '&Uacute;';
        entities['219'] = '&Ucirc;';
        entities['220'] = '&Uuml;';
        entities['221'] = '&Yacute;';
        entities['222'] = '&THORN;';
        entities['223'] = '&szlig;';
        entities['224'] = '&agrave;';
        entities['225'] = '&aacute;';
        entities['226'] = '&acirc;';
        entities['227'] = '&atilde;';
        entities['228'] = '&auml;';
        entities['229'] = '&aring;';
        entities['230'] = '&aelig;';
        entities['231'] = '&ccedil;';
        entities['232'] = '&egrave;';
        entities['233'] = '&eacute;';
        entities['234'] = '&ecirc;';
        entities['235'] = '&euml;';
        entities['236'] = '&igrave;';
        entities['237'] = '&iacute;';
        entities['238'] = '&icirc;';
        entities['239'] = '&iuml;';
        entities['240'] = '&eth;';
        entities['241'] = '&ntilde;';
        entities['242'] = '&ograve;';
        entities['243'] = '&oacute;';
        entities['244'] = '&ocirc;';
        entities['245'] = '&otilde;';
        entities['246'] = '&ouml;';
        entities['247'] = '&divide;';
        entities['248'] = '&oslash;';
        entities['249'] = '&ugrave;';
        entities['250'] = '&uacute;';
        entities['251'] = '&ucirc;';
        entities['252'] = '&uuml;';
        entities['253'] = '&yacute;';
        entities['254'] = '&thorn;';
        entities['255'] = '&yuml;';
    }
    
    if (useQuoteStyle !== 'ENT_NOQUOTES') {
        entities['34'] = '&quot;';
    }
    if (useQuoteStyle === 'ENT_QUOTES') {
        entities['39'] = '&#39;';
    }
    entities['60'] = '&lt;';
    entities['62'] = '&gt;';
    
    
    // ascii decimals to real symbols
    for (decimal in entities) {
        symbol = String.fromCharCode(decimal);
        hash_map[symbol] = entities[decimal];
    }
    
    return hash_map; 
}

function html_entity_decode( string, quote_style ) {
  var histogram = {}, symbol = '', tmp_str = '', entity = '';
    tmp_str = string.toString();
    
    if (false === (histogram = get_html_translation_table('HTML_ENTITIES', quote_style))) {
        return false;
    }

    // &amp; must be the last character when decoding!
    delete(histogram['&']);
    histogram['&'] = '&amp;';

    for (symbol in histogram) {
        entity = histogram[symbol];
        tmp_str = tmp_str.split(entity).join(symbol);
    }
    
    return tmp_str;
}


function switch_area(area,display,callback) {
	area = (area.indexOf("#")>=0) ? area : "#"+area;
	if (display=="hide") $(area).fadeOut(200,callback); else $(area).fadeIn(200,callback);
//  $(area).animate( {  height: 'toggle', opacity:display}, 200);
}

function getUrlVars() { var vars={}; var parts=window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { vars[key]=value; }); return vars; }