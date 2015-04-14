$(document).ready(function() {

	//show and hide subscribe popup on .bookmark-button click 
	$('.bookmark-button').on('click', function() {
		$('.popup').fadeIn(1000);
	});

	$('.exit-button').on('click', function() {
		$('.popup').hide();
	});

	//dropdown menu pluggin
	$('.menu').dropit();



	//object to position and fade in subscribe and contact us on page scroll
	var showSubscribe = {
		fadedInAlready: false,
		fadeInSubscribe: function () {
			//position of scrollbar
			var scrollPosition, 
				//submit and contact div to fade in
			    fadeInElement  = $('#scroll-nav'),
			    //cross browser window innerwidth
			    windowWidth    = window.innerWidth
								 || document.documentElement.clientWidth
								 || document.body.clientWidth;

			//set current scroll position - cross browser compatible IE8
			if (window.pageXOffset !== undefined) { 
				// 	All browsers, except IE9 and earlier
	    		scrollPosition = window.pageYOffset;
			} else { 
				// IE9 and earlier
	    		scrollPosition = document.documentElement.scrollTop;
			}

			//hide fadeInElement on smaller devices
			if(this.fadedInAlready && windowWidth < 760) {
				fadeInElement.hide();
				this.fadedInAlready = false;
			}
			//fadein subscribe and contact buttons if not already fadedIn and scroll is past the main navigation
			if(!this.fadedInAlready && scrollPosition > 111 && windowWidth > 760) {
				fadeInElement.fadeIn(1500);
				this.fadedInAlready = true;
			}

			//hide subscribe and contact buttons if already faded in and scroll is less than 111 (navigation height)
			if(this.fadedInAlready && scrollPosition < 111) {
				fadeInElement.hide();
				this.fadedInAlready = false;
			}
		}
	}; //end showSubscribe object



	//scroll user to signup form on button click
	$('.button-scroll').on('click', function() {
		$('html, body').animate({
			scrollTop: ($('.contact').offset().top)-(20)
		}, 2000);
	});



	//restive.js pixel breakpoints
	$('body').restive({
      breakpoints: ['240', '320','400', '480', '640', '960'],
      classes: ['css-240', 'css-320', 'css-400', 'css-480', 'css-640', 'css-960']
	});


	//functions to run on page load
	showSubscribe.fadeInSubscribe();



	//functions to run on window resize
	$(window).resize(function(){
		showSubscribe.fadeInSubscribe();
	});



	//functions to run on window scroll
	$(window).scroll(function() {
		showSubscribe.fadeInSubscribe();
	});
	

});