
$(document).ready(function(){
    $(".sayari").each(function(){
      ($(this).wrap('<div class="sayari-box"/>'));
      if($(this).parent().hasClass('sayari-box')){
      $(this).parent().wrap('<div class="sayari-wrapper"/>');
      }
    });
    $(".sayari-box").each(function(){
    ($(this).prepend('<span class="alert">Copied</span>'));
    ($(this).append('<div class="copy-box"/>'));
    if($(this).children().hasClass('copy-box')){
    $(this).children('.copy-box').append('<span class="shareme"><i class="fa fa-whatsapp"/>Share</span><span class="copyme"><i class="fa fa-clipboard"/>Copy</span>');
    }
  });
  //copy text inside the sayari box
  $('.copyme').click(function(e){
e.preventDefault();
		var $text = $("<input>");
		$('body').append($text);
		$(this).css({'background':'green','cursor':''});
		$text.val($(this).parent('.copy-box').parent('.sayari-box').find("> .sayari").text()).select();
		document.execCommand("copy");
        //remove temp
		$text.remove();
        //show alert
        $(this).parent('.copy-box').parent('.sayari-box').find('> .alert').show(800).fadeOut(300).delay(200);
        
  });
  //share on whatsapp script
  $('.shareme').click(function(){
  var title = document.location.origin;
  var text = $(this).parent('.copy-box').parent('.sayari-box').find("> .sayari").text();
            var msg = encodeURIComponent(text) + " - " + title;
            var open_url = "https://api.whatsapp.com/send?text=" + msg;
            window.open(open_url, "_blank");
            });
});
