//functions
$(document).ready(function(){
$('.ct').click(function(){
    $('body').toggleClass('togglecontact');
});
$('.sharethis').click(function(){
    $('body').toggleClass('toggleshare');
    $('body').toggleClass('toggleop');
})
//contact me
$('.ok').click(function(e){
    e.preventDefault();
    var name = 'Buddha';
    var email = 'buddhalimbu157@gmail.com';
    var msg = $('#textarea').val();
    var subject = $('#subject').val();
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   msg;
})
//global share
var title = document.location.origin;
$('#fb').click(function(){
    link = 'http://www.facebook.com/sharer.php?u=' + title;
    window.open(link,"_blank");
});
$('#tw').click(function(){
    link = 'http://twitter.com/share?url=' + title;
    window.open(link,"_blank");
});
$('#lk').click(function(){
    link = 'http://www.linkedin.com/shareArticle?mini=true&amp;amp;url=' + title;
    window.open(link,"_blank");
});
$('#tl').click(function(){
    link = 'https://telegram.me/share/url?url=' + title;
    window.open(link,"_blank");
});
$('#pin').click(function(){
    link = 'http://pinterest.com/pin/create/button/?url=' + title;
    window.open(link,"_blank");
});
$('#fb').click(function(){
    link = 'https://api.whatsapp.com/send?text=' + title;
    window.open(link,"_blank");
});
});
