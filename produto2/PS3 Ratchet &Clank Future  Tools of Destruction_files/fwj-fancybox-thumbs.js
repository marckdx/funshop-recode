(function(e){var t=e.fancybox;t.helpers.thumbs={defaults:{width:50,height:50,position:"bottom",source:function(t){var n;return t.element&&(n=e(t.element).find("img").attr("src")),!n&&"image"===t.type&&t.href&&(n=t.href),n}},wrap:null,list:null,width:0,init:function(t,n){var i,r=this,a=t.width,o=t.height,s=t.source;i="";for(var l=0;n.group.length>l;l++)i+='<li><a style="width:'+a+"px;height:"+o+'px;" href="javascript:jQuery.fancybox.jumpto('+l+');"></a></li>';this.wrap=e('<div id="fancybox-thumbs"></div>').addClass(t.position).appendTo("body"),this.list=e("<ul>"+i+"</ul>").appendTo(this.wrap),e.each(n.group,function(t){var i=s(n.group[t]);i&&e("<img />").load(function(){var n,i,s,l=this.width,c=this.height;r.list&&l&&c&&(n=l/a,i=c/o,s=r.list.children().eq(t).find("a"),n>=1&&i>=1&&(n>i?(l=Math.floor(l/i),c=o):(l=a,c=Math.floor(c/n))),e(this).css({width:l,height:c,top:Math.floor(o/2-c/2),left:Math.floor(a/2-l/2)}),s.width(a).height(o),e(this).hide().appendTo(s).fadeIn(300))}).attr("src",i)}),this.width=this.list.children().eq(0).outerWidth(!0),this.list.width(this.width*(n.group.length+1)).css("left",Math.floor(.5*e(window).width()-(n.index*this.width+.5*this.width)))},beforeLoad:function(e,t){return 2>t.group.length?(t.helpers.thumbs=!1,void 0):(t.margin["top"===e.position?0:2]+=e.height+15,void 0)},afterShow:function(e,t){this.list?this.onUpdate(e,t):this.init(e,t),this.list.children().removeClass("active").eq(t.index).addClass("active")},onUpdate:function(t,n){this.list&&this.list.stop(!0).animate({left:Math.floor(.5*e(window).width()-(n.index*this.width+.5*this.width))},150)},beforeClose:function(){this.wrap&&this.wrap.remove(),this.wrap=null,this.list=null,this.width=0}}})(jQuery);