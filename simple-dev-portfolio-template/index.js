// JavaScript 
//https://buddhalimbu.github.io
window.onload = () => {
const ct = document.querySelector('.ct');
const shareThis = document.querySelector('.sharethis');
   const sendmail = document.querySelector('.ok');
   const fb = document.querySelector('#fb');
   const tw = document.querySelector('#tw');
   const lk = document.querySelector('#lk');
  const tl = document.querySelector('#tl');
    const pin = document.querySelector('#pin');
    //get location title link
   const title = document.location.origin;
    
    function allEventListener(){
    ct.addEventListener("click", OpenContact);
    shareThis.addEventListener("click", share);
    sendmail.addEventListener("click", mail);
    fb.addEventListener("click", facebookShare);
    tw.addEventListener("click", twitterShare);
    lk.addEventListener("click", linkedinShare);
    tl.addEventListener("click", telegramShare);
   pin.addEventListener("click", pinterestShare);

}

// call all evenlistner 
    allEventListener();
}

function OpenContact(){
    document.body.classList.toggle('togglecontact');
    document.body.classList.remove('toggle');
}

function share(){
    document.body.classList.toggle('toggle');   document.body.classList.remove('togglecontact');
}


function mail(e) {
    e.preventDefault();
    const name = 'Buddha';
    const email = 'bsanbalimbi@gmail.com';
    const msg = document.querySelector('#textarea').value;
    const subject = document.querySelector('#subject').value;
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   msg;

}

function facebookShare(){
    link = 'http://www.facebook.com/sharer.php?u=' + title;
    window.open(link,"_blank");
}

function twitterShare(){
    link = 'http://twitter.com/share?url=' + title;
    window.open(link,"_blank");
}


function linkedinShare(){
    link = 'http://www.linkedin.com/shareArticle?mini=true&amp;amp;url=' + title;
    window.open(link,"_blank");
}


function telegramShare(){
    link = 'https://telegram.me/share/url?url=' + title;
    window.open(link,"_blank");
}


function pinterestShare(){
    link = 'http://pinterest.com/pin/create/button/?url=' + title;
    window.open(link,"_blank");
}



  
