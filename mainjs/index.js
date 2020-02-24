		$(document).ready(function(){
		var playanimations = function(){
			var offset = $(window).scrollTop() + $(window).height();
			$lim = $('.lim-animate');
			if($lim.length == 0){
				$(window).off('scroll',playanimations);
			}
			$lim.each(function(i){
				var $lims = $(this);
				if(($lims.offset().top + $lims.height() - 20) < offset){
					$lims.removeClass('lim-animate').addClass('lim-afteranimate');
				}
			});
		};
		$(window).on('scroll', playanimations);
		$(window).trigger('scroll');
		//loader
		$(window).load(function(){
			$('.loader').delay(200).hide(200);
		});
		//show gototop
$(window).scroll(function(){
if($(window).scrollTop() >= 20){
	$('.moveup').show(200);
}
else {
	$('.moveup').hide(200);
}
});
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
$('.fb').click(function(){
	var title = document.location.origin;
	var open = "http://www.facebook.com/sharer/sharer.php?u=" + title;
	window.open(open, "_blank");
})
//share on whatsapp
$('.wa').click(function(){
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
//pinterest share
$('.pin').click(function(){
	var title = 'https://buddhalimbu.github.io';
	var msg = ' My Portfolio Website';
	var link = "https://www.pinterest.com/pin/create/button/?description=" + msg + " - " + title;
	window.open(link,"_blank");
});
//gotohomepage
			$('.lim-logo img').click(function(){
				location.reload();
			});
});
