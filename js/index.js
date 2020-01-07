//This is javascript and jQuery code 
$(document).ready(function(){
$('#dark').click(function(){
	if ($(this).text() == 'Dark'){
		$(this).text('Light').css({'background':'#323232','color':'#eee',});
	}
	else {
		$(this).text("Dark").css({'background':'#eee','color':'#283592'});
	};
});

//prend bubles
$('.header').prepend('<div class="bubble b1"></div><div class="bubble b2"></div><div class="bubble b3"></div><div class="bubble b4"></div><div class="bubble b5"></div><div class="bubble b6"></div><div class="bubble b7"></div><div class="bubble b8"></div><div class="bubble b9"></div><div class="bubble b10"></div>');
$('.header').append('<div class="line"/><div class="line1"/><div class="line2"/>');

//add fa-fw in span
$('.hobby-item span').wrap('<div class="wrap-span"/>');
$('.slider').wrap('<div class="wrapper"/>');
$('.slider q').wrap('<div class="quote-box"/>');
$('.q').prepend('<span class="fa fa-heart"/>');
$('.logo')['clone']()['appendTo']('.logo-footer');
$('.credit').wrap('<div class="container"/>');

//menu toggle
$('.bars')['on']('click',function(){
	$('body')['toggleClass']('toggle-menu');
	if($(this)['children']('span')['hasClass']('fa-bars')){
		$(this)['children']('span')['addClass']('fa-times').css({'transition':'0.7s ease'});
		$(this)['children']('span')['removeClass']('fa-bars');
	}
	else {
		$(this)['children']('span')['removeClass']('fa-times');
		$(this)['children']('span')['addClass']('fa-bars');
	}
});
$('.menu-link a')['addClass']('scroll-menu');

$(window).scroll(function() {
	if ($(window).scrollTop() >= 10) {
		$('.navbar').addClass('sticky');
		$('.menu-link').addClass('same-bg');

	}
	else {
		$('.navbar').removeClass('sticky');
		$('.menu-link').removeClass('same-bg');
	}
});
$('.scroll-menu').click(function(){
	e.preventDefault();
	$('body,html').animate({
	scrollTop: $(this.hash).offset().top
      }, 5000);
	});
//date

$('.header').prepend('<div class="date-holder"><div id="month"/><div class="time-holder"><span id="hours"/>:<span id="minutes"/></div></div>');

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

//dark mode
$(document).ready(function(){
	$("#nightmode").click(function(){$("body").toggleClass("darktheme")}),$("body").toggleClass(localStorage.toggled),$("#nightmode").click(function(){"darktheme"!=localStorage.toggled?($("body").toggleClass("darktheme",!0),localStorage.toggled="darktheme"):($("body").toggleClass("darktheme",!1),localStorage.toggled="")});});
	

});
