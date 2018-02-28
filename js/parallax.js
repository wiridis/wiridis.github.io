$(document).ready(function() {

	redrawDotNav();

	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });

	/* Next/prev and primary nav btn click handlers */
	$('a.home-btn').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.story-btn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#story-btn').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.products-btn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#products-btn').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.recipe-btn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#recipe-btn').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.contact-btn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#contact-btn').offset().top
    	}, 1200, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    /* Show/hide dot lav labels on hover */
   /* $('#navi a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );*/

});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#story-btn').offset().top - (($('#products-btn').offset().top - $('#story-btn').offset().top) / 2);
	var section3Top =  $('#products-btn').offset().top - (($('#recipe-btn').offset().top - $('#products-btn').offset().top) / 2);
	var section4Top =  $('#recipe-btn').offset().top - (($('#contact-btn').offset().top - $('#recipe-btn').offset().top) / 2);
	var section5Top =  $('#contact-btn').offset().top - (($(document).height() - $('#contact-btn').offset().top) / 2);

	$('#navi a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('#navi a.home-btn').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('#navi a.story-btn').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('#navi a.products-btn').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('#navi a.recipe-btn').addClass('active');
	} else if ($(document).scrollTop() >= section5Top){
		$('#navi a.contact-btn').addClass('active');
	}

}
