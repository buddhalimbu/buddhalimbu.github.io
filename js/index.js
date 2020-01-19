$(document).ready(function(){
	//hobby item
	$('body').each(function(){
		$(this).prepend('<div class="date-holder"><div id="month"/><div class="time-holder"><span id="hours"/>:<span id="minutes"/></div></div>');
	})
	$('.hobby-item').each(function(){
		$(this).find('> span').wrap('<div click="wrap-span"/>');
	});
	//credit wrapping
	$('footer').each(function(){
		$(this).children('.credit').wrap('<div class="container"/>');
	});
	//demo wrap a tag
	$('.demo').each(function(){
		$(this).children('a').wrap('<button class="demo-button"/>');
	});
	//wrap content in image-wrapper
	$('.image-holder').each(function(){
       $(this).parent('.image-wrapper').append('<div class="myname"><span class="greet">Welcome</span><h1>Buddha</p></div>');
	});
	//topnav
	$('.topnav').each(function(){
		$(this).prepend('<span class="fa fa-times"/>');
	    $('this a').click(function(){
		$('body,html').animate({
			scrollTop : $(this.hash).offset.top
		},5000);
	    });
	    $('.fa-times,.menu-icon').click(function(){
	    	$('body').toggleClass('togglenav');
	    })
    });
    $('.heading').each(function(){
    	$(this).wrap('<div class="myhead"/>');
    })
    //scroll function
    $(window).scroll(function(){
    	var menu = $('.menu-icon');
    	var a = $('.fa-bars');
    	var b = $('.nightmode');
    	var c = $('.themepack');
    	var d = $('.gototop');
    	var e = $('.date-holder');
    	var nav = $('.nav');
    	if($(this).scrollTop() >= 2000){
    		menu.hide(500);
    		b.hide(500);
    		c.hide(500);
    		d.show(200);
    		e.hide(500)
    		nav.hide(500);
    	}
    	else if ($(this).scrollTop() >=10){
    		a.css({'background':'#1B2631'});
    		b.css({'background':'#B5AD07'});
    		c.css({'background':'#1B2631'});
    	}
    	else
    	{
    		menu.show(500);
    		b.show(500);
    		c.show(500);
    		d.hide(200);
    		e.show(500);
    		nav.show(500);
    		a.css({'background':'rgba(255,255,255,0.06)'});
    		b.css({'background':'rgba(255,255,255,0.06)'});
    		c.css({'background':'rgba(255,255,255,0.06)'});

    	}
    })
//mailto function on click Gmail
$(function () {
  $('.send').on('click', function (event) {
      event.preventDefault();
    var email = 'buddhalimbu157@gmail.com';
    var subject = $('#subject').val();
    var msg = $('#textarea').val();
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   msg;
  });
});
//share on facebook
$('.btn1').click(function(){
	var title = document.location.origin;
	var open = "http://www.facebook.com/sharer/sharer.php?u=" + title;
	window.open(open, "_blank");
})
//share on whatsapp
$('.btn2').click(function(){
	var title = document.location.origin;
	var msg = 'Buddha Limbu Portfolio Site';
	var all = "https://api.whatsapp.com/send?text=" + msg + " - " + title;
	window.open(all,"_blank");
});
$('.tw').click(function(){
	var title = 'https://buddhalimbu.github.io';
	var msg = ' My Portfolio Website';
	var link = "https://twitter.com/intent/tweet?url=" + title + "&text=" + msg + " - ";
	window.open(link,"_blank");
});
//dark mode
$(document).ready(function(){
	$("#nightmode").click(function(){$("body").toggleClass("darktheme")}),$("body").toggleClass(localStorage.toggled),$("#nightmode").click(function(){"darktheme"!=localStorage.toggled?($("body").toggleClass("darktheme",!0),localStorage.toggled="darktheme"):($("body").toggleClass("darktheme",!1),localStorage.toggled="")});});

//javascript sliders
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("myslider");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
//date and time
var months = ['January','February','March','May','June','July','August','September','October','Novermber','December'];
var date = new Date();
var month = months[date.getMonth()];
var hour = date.getHours() % 12 || 12 ;
var minute = date.getMinutes();
var a = document.getElementById('month');
var b = document.getElementById('hours');
var c = document.getElementById('minutes');
a.innerHTML = month;
b.innerHTML = hour;
c.innerHTML = minute;
});
