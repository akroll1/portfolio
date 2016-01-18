

$(document).ready(function(){

	var mainNav = $('#nav-bar');
	var mainNavScroll = 'nav-bar-scrolled';
	var headerHeight = $('#header').height();
	var projectsHeight = $('#main').height();
	var aboutHeight = $('#about').height();
	var contactHeight = $('#contact').height();
	// console.log('this is about height ' + headerHeight);

	$('#nav-bar li a').click(function(){
	// 	if ( $(this).scrollTop() > headerHeight) ){

	// }
			$('.active').removeClass('active');
			$(this).addClass('active');
	});



	$(window).scroll(function(){

		// console.log($(this).scrollTop());
		if( $(this).scrollTop() > (headerHeight) ){
			mainNav.addClass(mainNavScroll);
		}else{
			mainNav.removeClass(mainNavScroll);
		}	
	});

});	//ends doc.ready statement. 