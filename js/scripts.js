

$(document).ready(function(){


	var mainNav = $('#nav-bar');
	var mainNavScroll = 'nav-bar-scrolled';
	var active = $('#nav-bar li a');

	var headerHeight = $('#header').height();
	var projectsHeight = $('#main').height();
	var aboutHeight = $('#about').height();
	var contactHeight = $('#contact').height();
	var hiddenHeight = $('#hidden').height();
	var port = $('#port').scrollTop();
	console.log(port);
	// console.log('this is about height ' + headerHeight);

	$('#nav-bar li a').click(function(){
		// if ( $(this).scrollTop() > headerHeight) {

			$('.active').removeClass('active');
			$(this).addClass('active');
		// }
	});
	$(window).scroll(function(){

	if( $(this).scrollTop() >= 575){
		$('#port').removeClass('hidden');
		$('#port').addClass('animated zoomIn');		
	}

	// $(window).scroll(function(){

		// console.log($(this).scrollTop());
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