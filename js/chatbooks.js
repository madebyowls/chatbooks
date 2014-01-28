$(document).ready(function() {

	// Toggling the header download links
	var $fader = $('.floater .fade');
	var header = $('header')[0];
	$(window).on('scroll', function(){
		var breakpoint = header.scrollHeight;
		if( window.scrollY > breakpoint && !$fader.hasClass('in') )
			$fader.addClass('in');

		else if( window.scrollY <= breakpoint && $fader.hasClass('in') )
			$fader.removeClass('in');

	});
});