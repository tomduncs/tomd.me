(function($) {

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 666);
	        return false;
	      }
	    }
	  });

	$('.dropdown').on('click', function() {
		$('.dropdown-content').not($(this).find('.dropdown-content')).removeClass('open');
		$(this).find('.dropdown-content').toggleClass('open');
	});

	$('.nav-toggle').on('click', function() {
		$('.Nav').fadeToggle();
		$(this).toggleClass("is-active");
	});


})(jQuery);