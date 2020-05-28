(function($) {
	
	$(document).ready(function(){
		//smooth page scroll
		$('a[href*=#]:not([href=#])').click(function() {
			if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					},1000);
					return false;
				}
			}
		});
		
		//preloader
		$(window).on("load", function() { 
		$("#status").fadeOut(); 
		$("#preloader").delay(450).fadeOut("slow"); 
		$('body').delay(350).css({'overflow':'visible'});
		});
		
		//owl carousel 
		$('.owl-recommend').owlCarousel({
			autoPlay : 3000,
			items : 3,
			itemTablet : [768,1]
		});
		$('.owl-blog').owlCarousel({
			items:3,
			navigation:true,
			autoPlay:5000,
			pagination: false,      
			navigationText: ["<i class='fa fa-arrow-left' aria-hidden='ture'></i>","<i class='fa fa-arrow-right' aria-hidden='ture'></i>"]
		});
		
		//action-button
		$('.action-button').click(function(event){
			$('#login-form').slideDown();
			event.preventDefault();
		});
		
	});

})(jQuery);                 