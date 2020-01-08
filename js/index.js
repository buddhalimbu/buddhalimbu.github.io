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
//mailto
$(function () {
  $('.send').on('click', function (event) {
      event.preventDefault();
    var email = 'buddhalimbu157@gmail.com';
    var subject = $('#subject').val();
    var emailBody = $('#textarea').val();
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
  });
});
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
	$("#nightmode").click(function(){$("body").toggleClass("darktheme");
if($('.darkmode-title').text() == 'Night Mode'){
$('.darkmode-title').text('Day Mode');}else{$('.darkmode-title').text('Night Mode')
}}),$("body").toggleClass(localStorage.toggled),$("#nightmode").click(function(){"darktheme"!=localStorage.toggled?($("body").toggleClass("darktheme",!0),localStorage.toggled="darktheme"):($("body").toggleClass("darktheme",!1),localStorage.toggled="")});});

 //type

                  function write (obj, sentence, i, cb) {
                    if (i != sentence.length) {
                      setTimeout(function () {
                        i++
                        console.log('in timeout', i)
                        obj.innerHTML = sentence.substr(0, i+1) +' <em aria-hidden="true"></em>';
                        write(obj, sentence, i, cb)
                      }, 120)
                    } else {
                      console.log(i)
                      cb()
                    }
                  }
                   function erase (obj, cb,i) {
                   var sentence = obj.innerText
                      if (sentence.length != 0) {
                       setTimeout(function () {
                       sentence = sentence.substr(0,sentence.length-1)
                       console.log('in timeout', i)
                       obj.innerText = sentence
                       erase(obj, cb)
                        }, 18/(i*(i/10000000)))
                        } else {
                        obj.innerText = " "
                        cb()
                     }
                    }
                    var typeline = document.querySelector("#typeline")

                     function writeerase(obj, sentence, time, cb) {
                      write(obj, sentence, 0, function () {
                       setTimeout(function () {
                       erase(obj, cb) }, time) })
                       }

                  var sentences = [
                    "a Programmer. ",
                    "a Wed Dev. ",
                    "a Blogger. ",
                    "a Designer. "
                  ]
                    
                  var counter = 0
                  function loop () {
                    var sentence = sentences[counter % sentences.length]
                    writeerase(typeline, sentence, 1500, loop)
                    counter++
                  }

                  loop() 	

});
