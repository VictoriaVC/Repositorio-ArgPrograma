

$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});


/*
$(document).ready(function(){ irArriba(); }); //Hacia arriba

function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}*/
/*
window.onscroll = function(){
	if(document.documentElement.scrollTop > 100){
		document.querySelector('.go-top-container')
		.classList.add('show');
	} else {
		document.querySelector('.go-top-container')
		.classList.remove('show');
	}
}
/*
document.querySelector('.go-top-container')
	.addEventListener('click' , () = {
		window.scrollTo({
			top: 0,
			behavior:'smooth'
		})
	});
	

/*
	window.scrollTop({
			top: 0,
			behavior:'smooth'
		});
*/ 