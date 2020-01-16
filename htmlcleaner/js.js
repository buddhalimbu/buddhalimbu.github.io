//JavaScript code for convert and clear
function Clear(){
var a = document.getElementById('textarea');
a.value="",a.focus(),document.getElementById('convert').disabled=!1
}
function Convert(){
var a = document.getElementById('textarea'),
      b=a.value,
      c=document.getElementById('opt1'),
      d=document.getElementById('opt2'),
      e=document.getElementById('opt3'),
      f=document.getElementById('opt4'),
      g=document.getElementById('opt5');
      b=b.replace(/\t/g,""),
      c.checked&&(b=b.replace(/&/g,"&amp;")),
      d.checked&&(b=b.replace(/'/g,"&#039;")),
      e.checked&&(b=b.replace(/"/g,"quot;")),
      f.checked&&(b=b.replace(/</g,"&lt;")),
      g.checked&&(b=b.replace(/>/g,"&gt;")),
      a.value=b,a.focus(),a.select()
		}
$(document).ready(function(){
    //jquery code for copy append etc
    $('.demo-block').prepend('<span class="copy copyblock">COPY</span>');
    $('.text-box').prepend('<span class="copy copycode">COPY</span>');
    $('.copyblock').click(function(){
      var a = $('<input>');
      $('body').append(a);
      a.val($(this).parent('.demo-block').find('> code pre').text()).select();
      document.execCommand('copy');
      alert('TEXT HAS BEEN COPIED');
	    a.remove();
    });
    //copy
       $('.copycode').click(function(){
      var a = $('#textarea');
      a.focus(),a.select();
      if (a.val() === ''){
        alert('Opps nothing to copy');
      }
      else
         {
      document.execCommand('copy');
      alert('Textarea value has been copied');
      $(this).attr('disabled', true).css({'cursor':'no-drop','opacity':'0.5','cursor-events':'none'});
    }
    });

       //check
       $('.b').click(function(){
        var a = $('#tt');
        if (a.val() === ''){
          alert('Textarea value is empty');
        }
        else {
        $('#coded').append(a.val());
        $(this).attr('disabled', true).css({'cursor':'no-drop','opacity':'0.5'});
      }
       });
});
