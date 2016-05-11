

$(document).ready(function(){


	var mainNav = $('#nav-bar');
	var mainNavScroll = 'nav-bar-scrolled';
	var active = $('#nav-bar li a');

	var headerHeight = $('#header').height();
	var projectsHeight = $('#main').height();
	var aboutHeight = $('#about').height();
	var contactHeight = $('#contact').height();
	var hiddenHeight = $('#hidden').height();
	var aboutIcons = $('#about-icons').height();
	console.log(aboutIcons);
	// console.log('this is about height ' + headerHeight);

	$('.test').hover(function(){
		(this).toggleClass('hidden');

	});



	$('#nav-bar li a').click(function(){
		// if ( $(this).scrollTop() > headerHeight) {

			$('.active').removeClass('active');
			$(this).addClass('active');
		// }
	});
	$(window).scroll(function(){
		// console.log($(this).scrollTop());

	if( $(this).scrollTop() >= 570){
		$('#port').removeClass('hidden');
		$('#port').addClass('animated zoomIn');		
	
	}
	// $(window).scroll(function(){
	
	if( $(this).scrollTop() >= 850){
		$('.animates').addClass('animated bounceIn');
	}
	// $(window).scroll(function(){

	// 	if( $(this).scrollTop() > 734 ){
	// 		mainNav.addClass(mainNavScroll);
	// 	}else{
	// 		mainNav.removeClass(mainNavScroll);
	// 	}	
	// });
	if( $(this).scrollTop() > 40 ) {
		$('#hidden').fadeIn(1200).removeClass('hidden');		
	}

	// if( $(this).scrollTop()  >= 734 ) {
	// 	active.addClass('active');
	// }

	});
});	//ends doc.ready statement. 