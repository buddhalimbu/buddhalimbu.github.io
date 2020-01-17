$(document).ready(function(){
$('.hobby-item span').wrap('<div class="wrap-span"/>');
$('.slider').wrap('<div class="wrapper"/>');
$('.slider q').wrap('<div class="quote-box"/>');
$('.q').prepend('<span class="fa fa-heart"/>');
$('.logo')['clone']()['appendTo']('.logo-footer');
$('.credit').wrap('<div class="container"/>');
$('.demo a').wrap('<button class="demo-button"/>');
$('.image-wrapper').append('<div class="myname"><span class="greet">Welcome</span><h1>Buddha</p></div>');

//add class to menu-link a that when user clicks on it the body will animate
$('.topnav a')['addClass']('scroll-menu');
$('.topnav').prepend('<span class="fa fa-times"></span>');
//create sticky navbar on scroll 
$(window).scroll(function() {
	if ($(window).scrollTop() >= 10) {
		$('.navbar').addClass('sticky');
		$('.menu-icon .fa-bars').css({'background':'#1B2631'})
		$('.nightmode').css({'background':'#B5AD07'});
		$('.themepack').css({'background':'#1B2631'});
	}
	else {
		$('.navbar').removeClass('sticky');
		$('.menu-icon .fa-bars').css({'background':'rgba(255,255,255,0.06'});
		$('.nightmode,.themepack').css({'background':'rgba(255,255,255,0.06'})
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() >= 2000) {
		$('.menu-icon,.themepack,.date-holder').hide(500);
		$('.gototop').show(500);
	}
	else {
		$('.menu-icon,.themepack,.date-holder').show(500);
		$('.gototop').hide(500)
	}
});
//create animated click and goto
$('.topnav a').click(function(){
	e.preventDefault();
	$('body,html').animate({
	scrollTop: $(this.hash).offset().top
      }, 5000);
	});
$('.menu-icon,.fa-times').click(function(){
	$('body').toggleClass('togglenav');
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
$('.btn1').click(function(){
	var title = document.location.origin;
	var open = "http://www.facebook.com/sharer/sharer.php?u=" + title;
	window.open(open, "_blank");
})
$('.btn2').click(function(){
	var title = document.location.origin;
	var msg = 'Buddha Limbu Portfolio Site';
	var all = "https://api.whatsapp.com/send?text=" + msg + " - " + title;
	window.open(all,"_blank");
})
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
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
//prepend
	$('body').prepend('<div class="date-holder"><div id="month"/><div class="time-holder"><span id="hours"/>:<span id="minutes"/></div></div>');

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
