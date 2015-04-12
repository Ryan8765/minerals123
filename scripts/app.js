$(document).ready(function() {

	//scroll user to signup form
	$('#button-scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: ($('.contact').offset().top)-(20)
		}, 2000);
	});

	//restive.js pixel breakpoints
	$('body').restive({
      breakpoints: ['240', '320','400', '480', '640', '960'],
      classes: ['css-240', 'css-320', 'css-400', 'css-480', 'css-640', 'css-960']
	});

});