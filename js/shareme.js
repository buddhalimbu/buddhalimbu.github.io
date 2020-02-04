//create the classes and click functionsfunctions/functionsfunctions

$(document).ready(function(){
$('body').each(function(){
var link = $(location).attr('href');
//share widget here
$(this).prepend('<div class="share "><span class="fa fa-facebook fb"></span><span class="fa fa-twitter tw"></span><span class="fa fa-pinterest pn"></span><span class="fa fa-linkedin ln"></span><span class="fa fa-whatsapp wa"></span></div>');
$('body').find('> .share').attr('style','position:fixed;top:50%;left:0;display:flex;flex-direction:column;transform:translateY(-50%);z-index:22');
$('.share').find('span').attr('style','font-size:23px;width:40px;height:40px;line-height:40px;text-align:center;background:#1f2040;color:#fff;border-bottom:1px solid rgba(255,255,255,0.2);cursor:pointer');
$('.share').find('.fb').click(function(){
var url ='https://facebook.com/sharer.php?u=' + link;
window.open(url,'_blank');
});
$('.share').find('.tw').click(function(){
var url ='https://twitter.com/share?url=' + link;
window.open(url,'_blank');
});
$('.share').find('.ln').click(function(){
var url ='https://www.linkedin.com/shareArticle?mini=true&url=' + link;
window.open(url,'_blank');
});
$('.share').find('.wa').click(function(){
var url ='https://api.whatsapp.com/send?text=' + link;
window.open(url,'_blank');
});
$('.share').find('.pn').click(function(){
var url ='https://www.pinterest.com/pin/create/button/?url=' + link;
window.open(url,'_blank');
});
});
});
