// For convenience...
Date.prototype.format = function (mask, utc) {
  return dateFormat(this, mask, utc);
};

function closeLoading(obj){
	if (obj)
		$(obj).unblock();
	else	
		$.unblockUI();
}


function RemoveFormatString(TargetElement, FormatString) {
  if (TargetElement.value == FormatString) {
    TargetElement.value = "";
  }
  TargetElement.select();
}

function CheckDateRange(from, to) {
  if (Date.parse(from.value) <= Date.parse(to.value)) {
    return true;
  }
  else {
    return false;
  }
}

function IsValidDate(DateToCheck, FormatString) {
  var strDateToCheck;
  var strDateToCheckArray;
  var strFormatArray;
  var strFormatString;
  var strDay;
  var strMonth;
  var strYear;
  var intday;
  var intMonth;
  var intYear;
  var intDateSeparatorIdx = -1;
  var intFormatSeparatorIdx = -1;
  var strSeparatorArray = new Array("-", " ", "/", ".");
  var strMonthArray = new Array("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec");
  var intDaysArray = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
  strDateToCheck = DateToCheck.toLowerCase();
  strFormatString = FormatString.toLowerCase();
  if (strDateToCheck.length != strFormatString.length) {
    return false;
  }
  for (i = 0; i < strSeparatorArray.length; i++) {
    if (strFormatString.indexOf(strSeparatorArray[i]) != -1) {
      intFormatSeparatorIdx = i;
      break;
    }
  }
  for (i = 0; i < strSeparatorArray.length; i++) {
    if (strDateToCheck.indexOf(strSeparatorArray[i]) != -1) {
      intDateSeparatorIdx = i;
      break;
    }
  }
  if (intDateSeparatorIdx != intFormatSeparatorIdx) {
    return false;
  }
  if (intDateSeparatorIdx != -1) {
    strFormatArray = strFormatString.split(strSeparatorArray[intFormatSeparatorIdx]);
    if (strFormatArray.length != 3) {
      return false;
    }
    strDateToCheckArray = strDateToCheck.split(strSeparatorArray[intDateSeparatorIdx]);
    if (strDateToCheckArray.length != 3) {
      return false;
    }
    for (i = 0; i < strFormatArray.length; i++) {
      if (strFormatArray[i] == 'mm' || strFormatArray[i] == 'mmm') {
        strMonth = strDateToCheckArray[i];
      }
      if (strFormatArray[i] == 'dd') {
        strDay = strDateToCheckArray[i];
      }
      if (strFormatArray[i] == 'yyyy') {
        strYear = strDateToCheckArray[i];
      }
    }
  } else {
    if (FormatString.length > 7) {
      if (strFormatString.indexOf('mmm') == -1) {
        strMonth = strDateToCheck.substring(strFormatString.indexOf('mm'), 2);
      } else {
        strMonth = strDateToCheck.substring(strFormatString.indexOf('mmm'), 3);
      }
      strDay = strDateToCheck.substring(strFormatString.indexOf('dd'), 2);
      strYear = strDateToCheck.substring(strFormatString.indexOf('yyyy'), 2);
    } else {
      return false;
    }
  }
  if (strYear.length != 4) {
    return false;
  }
  intday = parseInt(strDay, 10);
  if (isNaN(intday)) {
    return false;
  }
  if (intday < 1) {
    return false;
  }
  intMonth = parseInt(strMonth, 10);
  if (isNaN(intMonth)) {
    for (i = 0; i < strMonthArray.length; i++) {
      if (strMonth == strMonthArray[i]) {
        intMonth = i + 1;
        break;
      }
    }
    if (isNaN(intMonth)) {
      return false;
    }
  }
  if (intMonth > 12 || intMonth < 1) {
    return false;
  }
  intYear = parseInt(strYear, 10);
  if (isNaN(intYear)) {
    return false;
  }
  if (IsLeapYear(intYear) == true) {
    intDaysArray[1] = 29;
  }
  if (intday > intDaysArray[intMonth - 1]) {
    return false;
  }
  return true;
}

function IsLeapYear(intYear) {
  if (intYear % 100 == 0) {
    if (intYear % 400 == 0) {
      return true;
    }
  } else {
    if ((intYear % 4) == 0) {
      return true;
    }
  }
  return false;
}

function popupWindow(url) {
  window.open(url, 'popupWindow', 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=yes,copyhistory=no,width=100,height=100,screenX=150,screenY=150,top=150,left=150')
}

function abrepopup(URL, Width, Height) {
  Left = (window.screen.availWidth - Width) / 2 - 13;
  Top = (window.screen.availHeight - Height) / 2
  window.open(URL, 'Popup', 'width=' + Width + ', height=' + Height + ', top=' + Top + ', left=' + Left + ', scrollbars=yes, status=yes, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
}

function abrebanner(URL, Width, Height) {
  if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1 && window.navigator.userAgent.indexOf('SV1') != -1) {
    i = 17;
  } else if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
    i = 17;
  } else if (window.navigator.userAgent.indexOf('MSIE 7.0') != -1) {
    i = 0;
  } else if (window.navigator.userAgent.indexOf('Firefox') != -1 && window.navigator.userAgent.indexOf("Windows") != -1) {
    i = 2;
  } else if (window.navigator.userAgent.indexOf('Mozilla') != -1 && window.navigator.userAgent.indexOf("Windows") != -1 && window.navigator.userAgent.indexOf("MSIE") == -1) {
    i = 2;
  } else if (window.opera && document.childNodes) {
    i = 2;
  } else if (navigator.vendor == 'KDE' && window.navigator.userAgent.indexOf("Konqueror") != -1) {
    i = -4;
  } else {
    i = 70;
  }
  Width = Width + i;
  Height = Height + 3;
  window.open(URL, 'Popup', 'width=' + Width + ', height=' + Height + ', top=60%,left=60%, scrollbars=yes, status=yes, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
}

function rowOverEffect(object) {
  if (object.className == 'linha_comum') object.className = 'linha_selecionada';
}

function rowOutEffect(object) {
  if (object.className == 'linha_selecionada' && object.id == "") object.className = 'linha_comum';
}

function hidePopup() {
  document.getElementById('banner_flat').style.display = "none"
}

function exibearea(sheet) {
  document.getElementById(sheet).style.display = 'block';
}

function ocultaarea(sheet) {
  document.getElementById(sheet).style.display = 'none';
}

function loadingAjax(obj, msg, align) {
  align = align || 'left';
  msg = msg || "Carregando...";
  if ($(obj)) {
    $(obj).html("<div style='text-align:"+align+"'><img src=\'/imagens/loading.gif\' border=0 style=\'margin-right:8px;display:inline-block;vertical-align:top;\'><span style=\'margin-top:2px;display:inline-block;color:#000000; font:14px Trebuchet MS, Arial\'>" + msg + "</span></div>");
  }
}

function validaNewsletter() {
  if ($("#newsletter_email").val().length < 6) {
    alert("Informe o E-MAIL para cadastro de newsletter");
    return false;
  } else if (!checkMail($("#newsletter_email").val())) {
    alert("Informe um endereço de e-mail VÁLIDO para cadastro de newsletter.");
    return false;
  } else return true;
}
var conteudo_notifica_produto = "";

function salvaNotificaoProduto(id) {
  conteudo_notifica_produto = document.getElementById("notificao_produto").innerHTML;
  var notifica_nome = document.getElementById("notifica_nome").value;
  var notifica_email = document.getElementById("notifica_email").value;
  var notifica_news = document.getElementById("newsletter").checked;
  if (notifica_nome.length < 2) {
    alert("Informe o seu NOME para cadastro.");
    document.getElementById("notifica_nome").focus();
  } else if (notifica_email.length < 5) {
    alert("Informe o E-MAIL para cadastro.");
    document.getElementById("notifica_email").focus();
  } else if (!checkMail(notifica_email)) {
    alert("Informe um endereço de E-MAIL VÁLIDO para cadastro.");
    document.getElementById("notifica_email").focus();
  } else {
    loadingAjax("notificao_produto", "Aguarde...");
    $.post('index.php?action=notify', {
      id_produto: id,
      nome: notifica_nome,
      email: notifica_email,
      newsletter: notifica_news
    }, function (resposta) {
      if (resposta != "") document.getElementById("notificao_produto").innerHTML = "<center><b>" + resposta + "</b><br><input type='button' name='bt_volta' value='OK' onClick='document.getElementById(\"notificao_produto\").innerHTML = conteudo_notifica_produto;'></center>";
      else document.getElementById("notificao_produto").innerHTML = "<b>Seu contato foi registrado com sucesso!</b><br>Quando o produto estiver novamente disponível você receberá uma notificação.";
    });
  }
  return false;
}

function abreDialog(title, url, width, type) { 
  $.fancybox({
    title : title,
		type  : (type?type:'ajax'),
		modal : false,
    href  : url,
		width : width,
		height: "80%",
		autoCenter : true,
		beforeShow  : function() {
        $('body, html').css('overflowY','hidden');
    },
    afterClose   : function() {
        $('body, html').css('overflowY','auto');
    },
		helpers : {
				title : {
						type: 'top'
				}
    }

	});
	
}

function popup_alterar_endereco(sid, ssl, reload_page) {
  var url = 'popup/alterar_endereco.php?';
  url += (sid != "") ? sid + "&" : "";
  url += (ssl == false) ? 'ssl=false&' : '';
  url += (reload_page) ? 'reload=true' : '';
  abreDialog('Alterar endereço de entrega', url, 850);
}

function changeElementValue(obj, value) {
  obj = document.getElementById(obj);
  obj.innerHTML = value;
}

function atualiza_endereco(url, reload_page) {
  loadingAjax("endereco_entrega", "Carregando...", "left");
  $.post(url, function (resposta) {
    if (reload_page) {
      if (url2go != "undefined") {
        redireciona(url2go);
      } else window.location.reload();
    } else { closeLoading(); $("#endereco_entrega").html(resposta); }
  });
}

function addFavorites(site, titulo) {
  var url = site;
  var title = titulo;
  if (window.sidebar) window.sidebar.addPanel(title, url, "");
  else if (window.opera && window.print) {
    var mbm = document.createElement('a');
    mbm.setAttribute('rel', 'sidebar');
    mbm.setAttribute('href', url);
    mbm.setAttribute('title', title);
    mbm.click();
  } else if (document.all) {
    window.external.AddFavorite(url, title);
  }
}

function checkRequiredFields() {
  var requiredFields = $('.FieldRequired');
  var valid = true;
  requiredFields.each(function () {
    var namePart = this.name.replace(/^.*\[/, '');
    var fieldId = namePart.replace(/\].*$/, '');
    if (this.type == 'checkbox') {
      if (!this.checked) {
        valid = false;
        alert("É necessário preencher todos os campos obrigatórios!");
        this.focus();
        this.select();
        return false;
      }
    } else if (this.value == '') {
      valid = false;
      alert("É necessário preencher todos os campos obrigatórios!");
      this.focus();
      this.select();
      return false;
    }
  });
  return valid;
}

var selected;

function selectRowEffect(object, buttonSelect, form) {
  form = form ? form : "alterar_endereco";
  form = document.getElementById(form);
  if (!selected) {
    if (document.getElementById) {
      selected = document.getElementById('defaultSelected');
    } else {
      selected = document.all['defaultSelected'];
    }
  }
  if (selected) selected.className = 'linha_comum';
  object.className = 'linha_selecionada';
  selected = object;
  if (form && form.shipping[0]) {
    form.shipping[buttonSelect].checked = true;
  } else {
    form.shipping.checked = true;
  }
}

function showFlash(Arquivo, Largura, Altura, BGcolor, Base) {
  AC_FL_RunContent('codebase', 'https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9.0.115', 'width', Largura, 'height', Altura, 'src', Arquivo, 'quality', 'high', 'pluginspage', 'https://www.macromedia.com/go/getflashplayer', 'movie', Arquivo, 'wmode', 'transparent', 'bgcolor', BGcolor, 'base', Base);
}

function AC_AddExtension(src, ext) {
  if (src.indexOf('?') != -1) return src.replace(/\?/, ext + '?');
  else return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) {
  var str = '<object ';
  for (var i in objAttrs)
    str += i + '="' + objAttrs[i] + '" ';
  str += '>';
  for (var i in params)
    str += '<param name="' + i + '" value="' + params[i] + '" /> ';
  str += '<embed ';
  for (var i in embedAttrs)
    str += i + '="' + embedAttrs[i] + '" ';
  str += ' ></embed></object>';
  document.write(str);
}

function AC_FL_RunContent() {
  var ret = AC_GetArgs(arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", "application/x-shockwave-flash");
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType) {
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i = 0; i < args.length; i = i + 2) {
    var currArg = args[i].toLowerCase();
    switch (currArg) {
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i + 1];
        break;
      case "src":
      case "movie":
        args[i + 1] = AC_AddExtension(args[i + 1], ext);
        ret.embedAttrs["src"] = args[i + 1];
        ret.params[srcParamName] = args[i + 1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
        ret.objAttrs[args[i]] = args[i + 1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace":
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "id":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i + 1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i + 1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}

function showMessageStack(title, message) {
  $("#exception").remove();
  $("#header").before('<div id="exception"><p><span>Erro!</span>Desculpe, possuímos apenas ' + qtdJson + ' itens em estoque de ' + json.itens[pos].product + '</p></div>');
}

function displayMessage($alert) {
  var alerttimer = window.setTimeout(function () {
    $alert.trigger('click');
  }, 8000);
  $alert.animate({
    height: '83px'
  }, 800).click(function () {
    window.clearTimeout(alerttimer);
    $alert.animate({
      height: '0'
    }, 800);
  });
}


function buyNow(id){ 
  var obj = $("a[rel="+id+"]");
//  var baseName = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1) || "index.php";
  var baseName = "index.php";
  var html_old = obj.html();
  loadingAjax("a[rel="+id+"]", "Aguarde...", "center");
  $.ajax({  
    type: "POST",  
    url: baseName+"?action=buy_now",  
    data: {
      id_produto:parseInt(id)
      },  
    dataType: 'json',
    success: function(resposta) { 
      if (resposta.change_url) window.location.replace(resposta.url);
      else {
        obj.html(html_old);
        abreDialog('Produto adicionado ao seu carrinho de compras!','popup/produto_addcart.php?frame=true&id_produto='+resposta.product_cart_id,700);
      }
    }  
  });    				
}

function enqueteVote(id) {
  var form2php = $('#frm_enquete').serialize();
		
  $.ajax({  
    type: "POST",
    url: "index.php?action=enquete_vote&pollid="+id,
    data: form2php,
    dataType:'json',
		beforeSend: function () { 
			loadingMsg('','#enquete_html'); 
		},
		complete: function (data) {
			$('#enquete_html').unblock(); 
		},
    success: function(data) {
      if (data.success) { 
        $("#enquete_html").hide();
        $("#enquete_html").html(html_entity_decode(data.html)).fadeIn('slow');
      } else if(data.error)
        alert(html_entity_decode(resposta));
    }
  });    				
  return false;
}

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var dateFormat = function () {
  var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
  timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
  timezoneClip = /[^-+\dA-Z]/g,
  pad = function (val, len) {
    val = String(val);
    len = len || 2;
    while (val.length < len) val = "0" + val;
    return val;
  };

  // Regexes and supporting functions are cached through closure
  return function (date, mask, utc) {
    var dF = dateFormat;

    // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
    if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
      mask = date;
      date = undefined;
    }

    // Passing date through Date applies Date.parse, if necessary
    date = date ? new Date(date) : new Date;
    if (isNaN(date)) throw SyntaxError("invalid date");

    mask = String(dF.masks[mask] || mask || dF.masks["default"]);

    // Allow setting the utc argument via the mask
    if (mask.slice(0, 4) == "UTC:") {
      mask = mask.slice(4);
      utc = true;
    }

    var	_ = utc ? "getUTC" : "get",
    d = date[_ + "Date"](),
    D = date[_ + "Day"](),
    m = date[_ + "Month"](),
    y = date[_ + "FullYear"](),
    H = date[_ + "Hours"](),
    M = date[_ + "Minutes"](),
    s = date[_ + "Seconds"](),
    L = date[_ + "Milliseconds"](),
    o = utc ? 0 : date.getTimezoneOffset(),
    flags = {
      d:    d,
      dd:   pad(d),
      ddd:  dF.i18n.dayNames[D],
      dddd: dF.i18n.dayNames[D + 7],
      m:    m + 1,
      mm:   pad(m + 1),
      mmm:  dF.i18n.monthNames[m],
      mmmm: dF.i18n.monthNames[m + 12],
      yy:   String(y).slice(2),
      yyyy: y,
      h:    H % 12 || 12,
      hh:   pad(H % 12 || 12),
      H:    H,
      HH:   pad(H),
      M:    M,
      MM:   pad(M),
      s:    s,
      ss:   pad(s),
      l:    pad(L, 3),
      L:    pad(L > 99 ? Math.round(L / 10) : L),
      t:    H < 12 ? "a"  : "p",
      tt:   H < 12 ? "am" : "pm",
      T:    H < 12 ? "A"  : "P",
      TT:   H < 12 ? "AM" : "PM",
      Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
      o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
      S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
    };

    return mask.replace(token, function ($0) {
      return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
    });
  };
}();

// Some common format strings
dateFormat.masks = {
  "default":      "ddd mmm dd yyyy HH:MM:ss",
  shortDate:      "mm/d/yy",
  shortDateAndHour: "d/mm/yyyy HH:MM:ss",
  mediumDate:     "mmm d, yyyy",
  longDate:       "mmmm d, yyyy",
  fullDate:       "dddd, mmmm d, yyyy",
  shortTime:      "h:MM TT",
  mediumTime:     "h:MM:ss TT",
  longTime:       "h:MM:ss TT Z",
  isoDate:        "yyyy-mm-dd",
  isoTime:        "HH:MM:ss",
  isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
  isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
  dayNames: [
  "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  monthNames: [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
};

$(document).ready(function(){	
		
		try {
				$(".item_box_produto div.imagem").equalHeights();
		
				$("div.carousel > ul").carouFredSel({
					circular: false,
					infinite: false,
					auto 		: false,
					responsive: true,
					scroll	: {
						duration	: 800
					},
					items		: {
							width: 260,
		//					height: '100%',	//	optionally resize item-height
							visible: {
								min: 1,
								max: 5
							}
					},
					prev : {
						button : function() {
							return $(this).parent().parent().find("a.prev");
						}
					},
					next : {
						button : function() {
							return $(this).parent().parent().find("a.next");
						}
					}
					//pagination	: "div.carousel div.pagination"
				})
		
				$(".box_template ul.content-itens > li").equalHeights();
		} catch(e){
			return false;
		}
});
