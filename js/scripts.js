

$(document).ready(function(){


	$('#nav-bar li a').click(function(){
		if(	$('.active').find().removeClass('active') );
		// $('.active').removeClass('active');
		$(this).addClass('active');
	});


	var html1 = '<div class="switch"><a href="https://damp-woodland-2282.herokuapp.com"><h3>E-Commerce Coffee Site</h3><p>A fully functional e-commerce site powered by Node.js and utilizing Stripes payment system.</p></a></div>';
	// var html2 = '<div class="switch"><a href="http://goblingame.andrewkroll.com"><h3>Goblin Game</h3><p>A simple game utilizing canvas. Use the arrow keys to move our hero around the board!</p></a></div>';
	var html2 = '<div class="switch"><a href="https://obscure-hollows-35112.herokuapp.com"><h3>IoTAndrew.com</h3><p>My blog on IoT, the internet of things. I touch on recent developments in IoT as well as IoT and artificial intelligence implications.</p></a></div>';
	var html3 = '<div class="switch"><a href="http://moviedb.andrewkroll.com"><h3>OMDB Movie Search</h3><p>A searchable movie database powered by omdb.coms API.</p></a></div>';
	var html4 = '<div class="switch"><a href="https://maple-leaf-46244.herokuapp.com/"><h3>Boxing 101</h3><p>A labor of love, work in progress! A fully functional e-commerce site dedicated to all things boxing. But shirts and gear to voting on who wins if all-time greats fought - a true boxing fans site!</p></a></div>';
	var html5 = '<div class="switch"><a href="http://slots.andrewkroll.com"><h3>Slot Machine</h3><p>A slot machine game utilizing jQuery that I developed on my own, from design to logic.</p></a></div>';
	var html6 = '<div class="switch"><a href="http://youtube.andrewkroll.com"><h3>OMDB Movie Search</h3><p>A YouTube clone I developed with real search from the YouTube API - check it out!</p></a></div>';
	var html7 = '<div class="switch"><a href="https://salty-savannah-41915.herokuapp.com/"><h3>AmericanVoid.com</h3><p>My blog on the American political scene, speaking to those planted firmly in the middle.</p></a></div>';
	var html8 = '<div class="switch"><a href=""><h3>Lego(IoT) House</h3><p>My Lego(IoT) House. No link here, this is a real, physical thing! See the description above in the Featured Project section.</p></a></div>';
	var html9 = '<div class="switch"><a href=""><h3>IoT Medicine Bottle Reminder Project</h3><p>A secret IoT project I am still working on, currently under development.</p></a></div>';

//================ PANE1 =================
	$('.pane1').mouseenter(function(){
		$('.pane1 h4').hide();
		$('.pane1 img').hide();
		// $('.pane1 img').css('opacity','0.1').fadeIn(200);
     	$(html1).fadeIn(500).appendTo($('.pane1'));
	});

	$('.pane1').mouseleave(function(){
		$('.pane1 h4').show();
		$('.pane1 img').show();
		// $('.pane1 img').css('opacity','1.0').fadeIn(1500);
		$('.switch').remove();
	});
//================= PANE 2 =================
	$('.pane2').mouseenter(function(){
		$('.pane2 h4').hide();
		$('.pane2 img').hide();

     	$(html2).fadeIn(500).appendTo($('.pane2'));
	});

	$('.pane2').mouseleave(function(){
		$('.pane2 h4').show();
		$('.pane2 img').show();
		
		$('.switch').remove();	
	});
//================ PANE 3 ====================
	$('.pane3').mouseenter(function(){
		$('.pane3 h4').hide();
		$('.pane3 img').hide();

     	$(html3).fadeIn(500).appendTo($('.pane3'));
	});
	$('.pane3').mouseleave(function(){
		$('.pane3 h4').show();
		$('.pane3 img').show();
		
		$('.switch').remove();	
	});


//================ PANE 4 ====================
	$('.pane4').mouseenter(function(){
		$('.pane4 h4').hide();
		$('.pane4 img').hide();

     	$(html4).fadeIn(500).appendTo($('.pane4'));
	});

	$('.pane4').mouseleave(function(){
		$('.pane4 h4').show();
		$('.pane4 img').show();
		
		$('.switch').remove();	

	});



//================ PANE 5 ====================
	$('.pane5').mouseenter(function(){
		$('.pane5 h4').hide();
		$('.pane5 img').hide();

     	$(html5).fadeIn(500).appendTo($('.pane5'));
	});

	$('.pane5').mouseleave(function(){
		$('.pane5 h4').show();
		$('.pane5 img').show();
		
		$('.switch').remove();	

	});

//================ PANE 6 ====================
	$('.pane6').mouseenter(function(){
		$('.pane6 h4').hide();
		$('.pane6 img').hide();

     	$(html6).fadeIn(500).appendTo($('.pane6'));
	});

	$('.pane6').mouseleave(function(){
		$('.pane6 h4').show();
		$('.pane6 img').show();
		
		$('.switch').remove();	
	});

//================ PANE 7 ====================
	$('.pane7').mouseenter(function(){
		$('.pane7 h4').hide();
		$('.pane7 img').hide();

     	$(html7).fadeIn(500).appendTo($('.pane7'));
	});

	$('.pane7').mouseleave(function(){
		$('.pane7 h4').show();
		$('.pane7 img').show();
		
		$('.switch').remove();	
	});

//================ PANE 8 ====================
	$('.pane8').mouseenter(function(){
		$('.pane8 h4').hide();
		$('.pane8 img').hide();

     	$(html8).fadeIn(500).appendTo($('.pane8'));
	});

	$('.pane8').mouseleave(function(){
		$('.pane8 h4').show();
		$('.pane8 img').show();
		
		$('.switch').remove();	
	});
//================ PANE 9 ====================
	$('.pane9').mouseenter(function(){
		$('.pane9 h4').hide();
		$('.pane9 img').hide();

     	$(html9).fadeIn(500).appendTo($('.pane9'));
	});

	$('.pane9').mouseleave(function(){
		$('.pane9 h4').show();
		$('.pane9 img').show();
		
		$('.switch').remove();	
	});	
			// $(".nav a").on("click", function(){
			//    $(".nav").find(".active").removeClass("active");
			//    $(this).parent().addClass("active");
			// });
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		// console.log(scroll);

		
		if( (scroll >= 0) && (scroll < 419) ){
			$('#homelink').addClass('active');
		}else{
			$('#homelink').removeClass('active');
		}

		if( (scroll > 420) && (scroll < 1150) ){
			$('#aboutlink').addClass('active');
		}else{
			$('#aboutlink').removeClass('active');
		}

		if( (scroll > 1151) && (scroll < 4129) ){
			$('#projectslink').addClass('active');
		}else{
			$('#projectslink').removeClass('active');
		}

		if(scroll > 4130){
			$('#contactlink').addClass('active');
		}else
			$('#contactlink').removeClass('active');
		
		if(scroll == 0){
			$('#nav-bar li a').css('fontSize','21px');
			$('#nav-bar').css('backgroundColor','rgba(106, 127, 131, 0.8)');
			$('#nav-bar').css('opacity','0.8');
		}else{
			$('#nav-bar li a').css('fontSize','16px');
			$('#nav-bar').css('backgroundColor','rgba(106, 127, 131, 0.5)');
			$('#nav-bar').css('opacity','0.7');
		}


		if( scroll > 570){
			$('#port').removeClass('hidden');
			$('#port').addClass('animated zoomIn');		
		
		}
		
		if( scroll > 850){
			$('.animates').addClass('animated bounceIn');
		}
		if(scroll > 4130){
			$('#contactme h1').addClass('animated lightSpeedIn');
		}
		if(scroll >3800){
			$('.leftc').animate({
				'width': '50%'
			});
		}
	});
});	//ends doc.ready statement. 