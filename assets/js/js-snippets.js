// Smooth scroll
var page = $('html, body');

// Anchor smooth scroll
function smoothScroll() {
	$('a[href*="#"]:not([href="#"])').on('click', function() {
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$(page).animate({
					scrollTop: target.offset().top-32
				}, 1400, '', function(){});
				return false;
			}
		}
	});
}
smoothScroll();

// Top scroll
function topScroll(){
	$('.scroll-top').on('click', function(){
		page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
			page.stop();
		});
		$(page).stop().animate({
			scrollTop: 0
		}, 1600, '', function(){});
		return false;
	});
}
topScroll();

// Responsive videos (YouTube and Vimeo embeds)
function responsiveVideos(){
	var iframes = document.getElementsByTagName( 'iframe' );
		for ( var i = 0; i < iframes.length; i++ ) {
		var iframe = iframes[i],
		players = /www.youtube.com|player.vimeo.com/;
		if ( iframe.src.search( players ) > 0 ) {
			var videoRatio = ( iframe.height / iframe.width ) * 100;
			iframe.style.position = 'absolute';
			iframe.style.top = '0';
			iframe.style.left = '0';
			iframe.width = '100%';
			iframe.height = '100%';
			var wrap = document.createElement( 'div' );
			wrap.className = 'fluid-vids';
			wrap.style.width = '100%';
			wrap.style.position = 'relative';
			wrap.style.paddingTop = videoRatio + '%';
			var iframeParent = iframe.parentNode;
			iframeParent.insertBefore( wrap, iframe );
			wrap.appendChild( iframe );
		}
	}
}
responsiveVideos();


// Grid widget, toggle by pressing "g"
// Add following to HTML as well
// <div class="grid-widget">
// 	<div class="row">
// 		<div class="col-xs-1"><span>1</span></div>
// 		<div class="col-xs-1"><span>2</span></div>
// 		<div class="col-xs-1"><span>3</span></div>
// 		<div class="col-xs-1"><span>4</span></div>
// 		<div class="col-xs-1"><span>5</span></div>
// 		<div class="col-xs-1"><span>6</span></div>
// 		<div class="col-xs-1"><span>7</span></div>
// 		<div class="col-xs-1"><span>8</span></div>
// 		<div class="col-xs-1"><span>9</span></div>
// 		<div class="col-xs-1"><span>10</span></div>
// 		<div class="col-xs-1"><span>11</span></div>
// 		<div class="col-xs-1"><span>12</span></div>
// 	</div>
// </div>

function gridWidget(){
	$gridWidget = $('.grid-widget');
	$(document).keydown(function(e){
		if (e.keyCode == 71) { // Key "g" 
			$gridWidget.toggleClass('is-active');
			return false;
		}
	});
}
gridWidget();


// Configure and initialize smoothstate
// Remember to initialize all relevant functions onAfter
$( function() {
	var $body = $('body');
	var settings = { 
		anchors: 'a',
		cacheLength: 4,
		loadingClass: 'is-loading',
		onStart: {
			duration: 500,
			render: function ( $container ) {
				$container.addClass( 'slide-out' )
			}
		},
		onAfter: function( $container, $newContent ) {
			// Remember to add functions
			$container.removeClass( 'slide-out' );
		},
		prefetch: true
	};

	$('#page').smoothState( settings );
});