
function phplive_unique() { var date = new Date() ; return date.getTime() ; }
if ( typeof( phplive_js ) == "undefined" )
{
	phplive_js = 1 ;
	var phplive_dom ;
	var phplive_btn = 47852978 ;
	var phplive_stat_refer = encodeURIComponent( document.referrer.replace("http", "hphp") ) ;
	var phplive_stat_onpage = encodeURIComponent( location.toString().replace("http", "hphp") ) ;
	var phplive_stat_title = encodeURIComponent( document.title ) ;
	var win_width = screen.width ;
	var win_height = screen.height ;
	var phplive_initiate_widget = 0;
	var phplive_support_47852978 ;
	var obj_div ;
	var obj_cover ;
	var obj_iframe ;

	var resolution = escape( win_width + " x " + win_height ) ;

	var phplive_quirks = 0 ;
	var phplive_IE ;
	//@cc_on phplive_IE = navigator.appVersion ;

	javascript:(
		function()
		{
			var mode=document.compatMode,m ;
			if( mode )
			{
				if ( ( mode == 'BackCompat' ) && phplive_IE )
					phplive_quirks = 1 ;
			}
		}
	)();

}

function init_doms()
{
	// jQuery lib load
	if ( ( typeof( window.jQuery ) == "undefined" ) && ( typeof( phplive_dom ) == "undefined" ) )
	{
		var script_jquery = document.createElement('script') ;
		script_jquery.type = "text/javascript" ; script_jquery.async = true ;
		script_jquery.onload = script_jquery.onreadystatechange = function () {
			phplive_dom = window.jQuery.noConflict() ;
		} ;
		script_jquery.src = "//chat.iset.com.br/js/framework.js" ;
		var script_jquery_s = document.getElementsByTagName('script')[0] ;
		script_jquery_s.parentNode.insertBefore(script_jquery, script_jquery_s) ;
	}
	else
		phplive_dom = window.jQuery ;
}


var phplive_pullimg_footprint_47852978, st_phplive_pullimg_47852978, phplive_thec_47852978 = 0 ;
// below image also in function phplive_image_refresh_47852978()
var phplive_status_image_47852978 = "//chat.iset.com.br/ajax/image.php?aid=174&d=0&r="+phplive_stat_refer+"&p="+phplive_stat_onpage+"&title="+phplive_stat_title+"&btn=47852978&resolution="+resolution+"&"+phplive_unique() ;
var phplive_request_url_47852978 = "//chat.iset.com.br/ichat.php?aid=174&d=0&btn=47852978&onpage="+phplive_stat_onpage+"&title="+phplive_stat_title ;
var phplive_widget_47852978 = "" ;
var skipFlag = 0;

var phplive_interval_47852978 = setInterval(function(){ phplive_image_refresh_47852978() ; }, 25000) ;
var phplive_image_or_text_47852978 = "<img src=\""+phplive_status_image_47852978+"\" border=0 name=\"phplive_image_or_text_image_47852978\" id=\"phplive_image_or_text_image_47852978\">" ;
var usr_inv_hash = "a1ce58b4d0889fe1d332e52e2d948a89";
    

function phplive_image_refresh_47852978()
{
		var chat_icon_47852978 = "//chat.iset.com.br/ajax/image.php?aid=174&d=0&r="+phplive_stat_refer+"&p="+phplive_stat_onpage+"&title="+phplive_stat_title+"&btn=47852978&resolution="+resolution+"&"+phplive_unique() ;

	document.getElementById("phplive_image_or_text_image_47852978").src = chat_icon_47852978 ;
	}

function phplive_silent_close( phplive_theces, theisadmin, thetimer, theunique )
{
	alert( unescape( phplive_theces ) ) ;
}

function phplive_footprint_tracker_47852978()
{
	phplive_pullimg_footprint_47852978 = new Image ;
	phplive_pullimg_footprint_47852978.onload = phplive_pullimg_actions_47852978 ;
	phplive_pullimg_footprint_47852978.src = "//chat.iset.com.br/ajax/footprints.php?aid=174&deptid=0&r="+phplive_stat_refer+"&onpage="+phplive_stat_onpage+"&title="+phplive_stat_title+"&c="+phplive_thec_47852978+"&resolution="+resolution+"&"+phplive_unique() ;

}

function phplive_pullimg_actions_47852978()
{
	var thisflag = phplive_pullimg_footprint_47852978.width ;
	
	if ( ( thisflag == 1 ) || ( thisflag == 2 ) || (thisflag == 3) )
	{
		// if phplive_dom is not registered, wait for the next cycle as the loading was too fast
		if ( ( thisflag == 2 ) && !phplive_initiate_widget && ( typeof( phplive_dom ) != "undefined" ) )
		{
			phplive_dom( "body" ).append( phplive_widget_47852978 ) ;

			phplive_initiate_widget = 1 ;
			obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
			obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
			obj_iframe = phplive_dom ( "#iframe_widget_47852978" ) ;

			obj_iframe.attr( 'src', "//chat.iset.com.br/widget.php?aid=174&btn=47852978&"+phplive_unique() ) ;
			if ( typeof( obj_div_cover.center ) == "undefined" )
			{
				obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
				obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
				obj_iframe = phplive_dom ( "#iframe_widget_47852978" ) ;
			}

			obj_div_cover.show().animate({ left: 50 }, 2000, function() { obj_div.fadeIn("fast") ; }) ;
		}
		else if ( thisflag == 3 )
		{
			console.log('Invited');
			skipFlag = 1;
			phplive_dom( "body" ).append( phplive_widget_47852978 ) ;

			phplive_initiate_widget = 1 ;
			obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
			obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
			obj_iframe = phplive_dom ( "#iframe_widget_47852978" ) ;

			obj_iframe.attr( 'src', "//chat.iset.com.br/widget.php?aid=174&btn=47852978&"+phplive_unique() ) ;
			if ( typeof( obj_div_cover.center ) == "undefined" )
			{
				obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
				obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
				obj_iframe = phplive_dom ( "#iframe_widget_47852978" ) ;
			}

			obj_div_cover.show().animate({ left: 50 }, 2000, function() { obj_div.fadeIn("fast") ; }) ;
		}
		else if ( ( thisflag == 1 ) && phplive_initiate_widget )
		{
			phplive_initiate_widget = 0 ;
			obj_div.fadeOut( "fast" ) ;
			obj_div_cover.fadeOut("fast") ;
		}
		else
		{
			// brute fix - will refine to dom load check in future build
			setTimeout(function(){ init_doms() }, 2000) ;
		}

		++phplive_thec_47852978 ;
		st_phplive_pullimg_47852978 = setTimeout(function(){ phplive_footprint_tracker_47852978() }, 10 * 1000) ;
	}
	else if ( thisflag == 4 )
	{
		clearTimeout( st_phplive_pullimg_47852978 ) ;
		clearInterval( phplive_interval_47852978 ) ;
	}
}

function phplive_launch_chat_47852978(thewidget)
{
	var winname = phplive_unique() ;
	if((skipFlag == 1) && (thewidget == 1))
	{
		var launch_url = phplive_request_url_47852978+"&widget="+thewidget+"&invHash="+usr_inv_hash;
		skipFlag = 0;
	} else
	{
		var launch_url = phplive_request_url_47852978+"&widget="+thewidget;
	}
	
	console.log('URL => ' + launch_url);
	
	<!-- alert(phplive_request_url_47852978); -->


	phplive_support_47852978 = window.open( launch_url, winname, 'scrollbars=no,resizable=yes,menubar=no,location=no,screenX=50,screenY=100,width=550,height=410' ) ;
}

function phplive_write_widget_47852978()
{
	var this_position = ( phplive_quirks ) ? "absolute" : "fixed" ;
	var this_widget_width = ( phplive_quirks ) ? 270 : 250 ;
	var this_widget_height = ( phplive_quirks ) ? 180 : 160 ;
	var this_widget_top = 190 ;

	// NOTE: we do not recommend modifying the width and height of the widget window as this will alter the
	// communication behavior based on mouse coordinates in function phplive_pullimg_actions_47852978()
	phplive_widget_47852978 = "<map name='initiate_chat_cover'><area shape='rect' coords='320,2,340,20' href='JavaScript:void(0)' onClick='phplive_widget_decline_47852978()'><area shape='rect' coords='0,7,335,138' href='JavaScript:void(0)' onClick='phplive_widget_launch_47852978()'></map><div id='phplive_widget_47852978' style='display: none; position: "+this_position+"; top: "+this_widget_top+"px; left: 50px; z-Index: 10000;'><iframe id='iframe_widget_47852978' name='iframe_widget_47852978' style='display: none; width: 1px; height: 1px;' src='//chat.iset.com.br/blank.php' scrolling='no' border=0 frameborder=0 onLoad=''></iframe></div><div id='phplive_widget_cover_47852978' style='display: none; position: "+this_position+"; top: "+this_widget_top+"px; left: -800px; z-Index: 10001;'><img src='//chat.iset.com.br//web/clients/174/icon_initiate_0.png?1398802736' width='340' height='137' border=0 usemap='#initiate_chat_cover' style='-moz-border-radius: 5px; border-radius: 5px;'></div>" ;
}

function phplive_widget_launch_47852978()
{
	if ( phplive_initiate_widget )
	{
		var obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
		var obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
		var obj_iframe = phplive_dom( "#iframe_widget_47852978" ) ;

		obj_div.fadeOut( "fast" ) ;
		obj_div_cover.hide() ;
		phplive_launch_chat_47852978(1) ;
	}
}

function phplive_widget_decline_47852978()
{
	if ( phplive_initiate_widget )
	{
		var obj_div = phplive_dom( "#phplive_widget_47852978" ) ;
		var obj_div_cover = phplive_dom( "#phplive_widget_cover_47852978" ) ;
		var obj_iframe = phplive_dom ( "#iframe_widget_47852978" ) ;

		obj_div.fadeOut( "fast" ) ;
		obj_div_cover.hide() ;

		phplive_pullimg_widget_47852978 = new Image ;
		phplive_pullimg_widget_47852978.onload = function() {
			//
		};
		phplive_pullimg_widget_47852978.src = "//chat.iset.com.br/ajax/chat_actions.php?aid=174&action=disconnect&isop=0&widget=1&ip=201.91.155.20&"+phplive_unique() ;
		phplive_initiate_widget = 0 ;
	}
}

var phplive_status_image_write_47852978 = "<span id=\"phplive_btn_47852978\" onClick=\"phplive_launch_chat_47852978(0)\" style=\"cursor: pointer;\"></span>" ;
document.write( phplive_status_image_write_47852978 ) ;

(function() {
	if ( typeof( phplive_footprint_js ) == "undefined" )
	{
		phplive_footprint_js = 1 ;
		phplive_footprint_tracker_47852978() ;
	}
	document.getElementById("phplive_btn_47852978").innerHTML = phplive_image_or_text_47852978 ;
	phplive_write_widget_47852978() ;
})();