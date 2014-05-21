
function validaCPF(cpf,tipo) {
	if (cpf.length == 0) {
			 document.getElementById("valida_cpf").style.display = "none";
	} else {
		valor = true;
		erro = new String;
		if (cpf.length < 11) erro += "São necessários 11 digitos para verificação do CPF! \n\n"; 
	
		if(document.layers && parseInt(navigator.appVersion) == 4){
			x = cpf.substring(0,3);
			x += cpf.substring(4,7);
			x += cpf.substring(8,11);
			cpf = x;	
		} else {
			cpf = cpf.replace(".","");
			cpf = cpf.replace(".","");
			cpf = cpf.replace(".","");
			cpf = cpf.replace("-","");
		}
		var nonNumbers = /\D/;
		if (nonNumbers.test(cpf)) erro += "A verificação de CPF suporta apenas números! \n\n";	
		if (cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999"){
				erro += "Número de CPF inválido!"
		}
		var a = [];
		var b = new Number;
		var c = 11;
		for (i=0; i<11; i++){
			a[i] = cpf.charAt(i);
			if (i < 9) b += (a[i] *  --c);
		}
		if ((x = b % 11) < 2) { a[9] = 0 } else { a[9] = 11-x }
		b = 0;
		c = 11;
		for (y=0; y<10; y++) b += (a[y] *  c--); 
		if ((x = b % 11) < 2) { a[10] = 0; } else { a[10] = 11-x; }
		if ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10])){
			erro +="Digito verificador do CPF inválido!";
		}
		cpf = cpf.substring(0,3)+'.'+cpf.substring(3,6)+'.'+cpf.substring(6,9)+'-'+cpf.substring(9,11); 

    if (erro.length > 0){
			 if (tipo == 1) { alert(erro); return false; }
			 else if (tipo == 2) {
						 document.getElementById("valida_cpf").style.display = "";
						 document.getElementById("valida_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>";
						 return false; 		
			 } else if (tipo == 3) {
						 document.getElementById("valida_cnpj_cpf").style.display = "";
						 document.getElementById("valida_cnpj_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>";
						 return cpf;
			 }
			 
		}
		if (tipo == 2) {
			 document.getElementById("valida_cpf").style.display = "";
			 document.getElementById("valida_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/ok.gif' width='16' height='16'>";
		} else if (tipo == 3) { 
			 document.getElementById("valida_cnpj_cpf").style.display = "";
  		 document.getElementById("valida_cnpj_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/ok.gif' width='16' height='16'>";
		   return cpf;
		}
	}
	return true;
}

function validaCNPJ(CNPJ,tipo) {
	if (CNPJ.length == 0) {
			   document.getElementById("valida_cnpj").style.display = "none";
	} else { 
			erro = new String; 
			if (CNPJ.length == 14) { 
				 CNPJ = CNPJ.substring(0,2)+'.'+CNPJ.substring(2,5)+'.'+CNPJ.substring(5,8)+'/'+CNPJ.substring(8,12)+'-'+CNPJ.substring(12,14); 
			}
			if (CNPJ.length < 18) erro += "É necessário preencher corretamente o número do CNPJ!\n\n";
			if (CNPJ.length == 19) CNPJ = CNPJ.substring(1,19);
			if ((CNPJ.charAt(2) != ".") || (CNPJ.charAt(6) != ".") || (CNPJ.charAt(10) != "/") || (CNPJ.charAt(15) != "-")){
				if (erro.length == 0) erro += "É necessário preencher corretamente o número do CNPJ! (18 caracteres)\n\n";
			}
		
			if(document.layers && parseInt(navigator.appVersion) == 4){
				x = CNPJ.substring(0,2);
				x += CNPJ.substring(3,6);
				x += CNPJ.substring(7,10);
				x += CNPJ.substring(11,15);
				x += CNPJ.substring(16,18);
				CNPJ = x;	
			} else {
				CNPJ = CNPJ.replace(".","");
				CNPJ = CNPJ.replace(".","");
				CNPJ = CNPJ.replace("-","");
				CNPJ = CNPJ.replace("/","");
			}
			var nonNumbers = /\D/;
			if (nonNumbers.test(CNPJ)) erro += "A verificação de CNPJ suporta apenas números! \n\n";	
			var a = [];
			var b = new Number;
			var c = [6,5,4,3,2,9,8,7,6,5,4,3,2];
			for (i=0; i<12; i++){
				a[i] = CNPJ.charAt(i);
				b += a[i] * c[i+1];
			}
			if ((x = b % 11) < 2) { a[12] = 0 } else { a[12] = 11-x }
			b = 0;
			for (y=0; y<13; y++) {
				b += (a[y] * c[y]); 
			}
			if ((x = b % 11) < 2) { a[13] = 0; } else { a[13] = 11-x; }
			if ((CNPJ.charAt(12) != a[12]) || (CNPJ.charAt(13) != a[13]) || (CNPJ == '00000000000000')){
				erro +="Digito verificador do CNPJ inválido!";
			}
		  
			CNPJ = CNPJ.substring(0,2)+'.'+CNPJ.substring(2,5)+'.'+CNPJ.substring(5,8)+'/'+CNPJ.substring(8,12)+"-"+CNPJ.substring(12,14); 
			
			if (erro.length > 0){
				if (tipo == 1) { alert(erro); return false; }
				else if (tipo == 2) {
					 document.getElementById("valida_cnpj").style.display = "";
					 document.getElementById("valida_cnpj").innerHTML = "<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>";
					 return false;
				} else if (tipo == 3) { 
					 document.getElementById("valida_cnpj_cpf").style.display = "";
					 document.getElementById("valida_cnpj_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>";
					 return CNPJ;
				}
			  
			}
			if (tipo == 2) {
			   document.getElementById("valida_cnpj").style.display = "";
			   document.getElementById("valida_cnpj").innerHTML = "<img src='"+dir_fwiset+"imagens/ok.gif' width='16' height='16'>";
				 return true;
			} else if (tipo == 3) {
			   document.getElementById("valida_cnpj_cpf").style.display = "";
			   document.getElementById("valida_cnpj_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/ok.gif' width='16' height='16'>";
				 return CNPJ;
			} else return true;
		 
	}
}

function formataCNPJCPF(strField,e){
	if ((strField.value.length == 14 && strField.value.indexOf(".") < 0) || strField.value.length == 18){
		 strField.value = validaCNPJ(strField.value,3);
	} else if (strField.value.length == 11 || strField.value.length == 14){
		 strField.value = validaCPF(strField.value,3);
	} else if (strField.value.length > 0) { 
	     document.getElementById("valida_cnpj_cpf").style.display = "";
			 document.getElementById("valida_cnpj_cpf").innerHTML = "<img src='"+dir_fwiset+"imagens/erro.gif' width='16' height='16'>";  
	}
}

function isEmail(str) {
	var supported = 0;
	if (window.RegExp) {
		var tempStr = "a";
		var tempReg = new RegExp(tempStr);
		if (tempReg.test(tempStr)) supported = 1;
	}
	if (!supported) return (str.indexOf(".") > 2) && (str.indexOf("@") > 0);
	var r1 = new RegExp("(@.*@)|(\\.\\.)|(@\\.)|(^\\.)");
	var r2 = new RegExp("^.+\\@(\\[?)[a-zA-Z0-9\\-\\.]+\\.([a-zA-Z]{2,3}|[0-9]{1,3})(\\]?)$");
	return (!r1.test(str) && r2.test(str));
}