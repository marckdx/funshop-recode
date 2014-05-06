jQuery.browser={};(function(){jQuery.browser.msie=false;
jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();

(function($) { $.fn.hasScrollBar = function() { return this.get(0).scrollHeight > this.height(); }})(jQuery);

/* JQuery animate */

// santa criatividade!

jQuery.fn.reset = function() {
	this.each(function(){
		if($(this).is('form')) {
			var button = jQuery(jQuery('<input type="reset" />'));
			button.hide();
			$(this).append(button);
			button.click().remove();
		} else if($(this).parent('form').size()) {
			var button = jQuery(jQuery('<input type="reset" />'));
			button.hide();
			$(this).parent('form').append(button);
			button.click().remove();
		} else if($(this).find('form').size()) {
			$(this).find('form').each(function(){
				var button = jQuery(jQuery('<input type="reset" />'));
				button.hide();
				$(this).append(button);
				button.click().remove();
			});
		}
	})
	return this;
};

jQuery.fn.center = function (absolute) {
	return this.each(function () {
		var t = jQuery(this);

		t.css({
			position:	absolute ? 'absolute' : 'fixed', 
			left:		'50%', 
			top:		'45%', 
			zIndex:		'99'
		}).css({
			marginLeft:	'-' + (t.outerWidth() / 2) + 'px', 
			marginTop:	'-' + (t.outerHeight() / 2) + 'px'
		});

		if (absolute) {
			t.css({
				marginTop:	parseInt(t.css('marginTop'), 10) + jQuery(window).scrollTop(), 
				marginLeft:	parseInt(t.css('marginLeft'), 10) + jQuery(window).scrollLeft()
			});
		}
	});
};

jQuery.exists = function(selector) {return ($(selector).length > 0);}

$.fn.equalHeights = function(minHeight, maxHeight) { 
	var tallest = (minHeight) ? minHeight : 0;
	this.each(function() {
		if ($(this).height() > tallest) {
			tallest = $(this).height();
		}
	});
	if(maxHeight && tallest > maxHeight) tallest = maxHeight;
	return this.each(function() { 
		$(this).height(tallest).css("overflow","auto");	
	});
}
