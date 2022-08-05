// Creating Variable

let $ = (selector) => document.querySelector(selector);

let $$ = (selector) => document.querySelectorAll(selector); 

var body = $("body");

    head = $("head"),

    link = window.location.href;

// Bring Fontawesome

function CreateFontAwesome() {
    const FontAwesome = document.createElement("link");

    FontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";

    FontAwesome.rel = "stylesheet";

    FontAwesome.crossorigin = "anonymous";
    FontAwesome.referrerpolicy = "no-referrer";

    head.appendChild(FontAwesome);
}

//Create CSS

function createStyle() {
    const style = document.createElement("style");

    style.innerHTML = `
    .share {
    position: fixed;

    top: 50%;

    left: 0;

    display: flex;
    flex-direction: column;
    transform: translateY(-50%);

    z-index: 22;
    
    transition:0.4s ease
    }
    
.share .iconWrap {
    display:flex;
    flex-direction:column;
    justify-content:center;
    position:relative;
    visibility: visible;
    opacity:1;
    transition:0.8s;
}

.share span {
    font-size: 23px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-bottom: 1px solid rgba(255, 255, 255, 0.01);
    cursor: pointer;
}

.share .shareWrap {
    background:#ff153f;
    border-radius:6px;
    transition:0.4s ease-out;
    transition:0.4s ease;
    opacity:0;
    visibility:hidden;
}
.share .shareWrap.sw {
    left:0;
    border:none;
    position:fixed;
    transition:.4s ease-out; 
    opacity:1;
    visibility:visible;
}

.share .fb {
    background:#3b5998
}
.share .tw {
    background:#00aced
}
.share .ln {
    background:#007bb6
}
.share .pn {
    background:#cb2027
}
.share .wa {
    background:#34bf49
}
.share .closeShare {
    background:#000000
}

/** Show Hide Transition**/

.share .iconWrap.td {
    visibility:hidden;
    opacity:0;
}

                `;

    head.appendChild(style);
}

//Show Share Icon Cliking On Share Button

function ShowHideIcon(){

    var shareIconWrap = $('.share .iconWrap');
    var CloseWrap = $('.iconWrap .closeShare');
      
    // Hide Share On Click
    CloseWrap.onclick = () => {
        shareIconWrap.classList.add('td');
    }            
}

// Now adding Click Function();

function makeLinkButton() {
    var fbLink = $(".share .fb");

    var twLink = $(".share .tw");

    var waLink = $(".share .wa");

    var lnLink = $(".share .ln");

    var pnLink = $(".share .pn");

    fbLink.onclick = () => {
        var url = "https://facebook.com/sharer.php?u=" + link;

        window.open(url, "_blank");
    };

    twLink.onclick = () => {
        var url = "https://twitter.com/share?url=" + link;

        window.open(url, "_blank");
    };

    waLink.onclick = () => {
        var url = "https://api.whatsapp.com/send?text=" + link;

        window.open(url, "_blank");
    };

    lnLink.onclick = () => {
        var url = "https://www.linkedin.com/shareArticle?mini=true&url=" + link;

        window.open(url, "_blank");
    };

    pnLink.onclick = () => {
        var url = "https://www.pinterest.com/pin/create/button/?url=" + link;

        window.open(url, "_blank");
    };
}


window.onload = function(){
    //create spans for fontawesome
    var spans = [ "fa fa-facebook fb","fa fa-twitter tw","fa fa-pinterest pn","fa fa-linkedin ln","fa fa-whatsapp wa","fa fa-times closeShare" ];
    
   //create divs now 
   var share = document.createElement('div');
     share.className = "share";

      //create div for all share icons
       var iconWrap = document.createElement('div');
       iconWrap.className = "iconWrap";
           
      //apend the both dic inside <div class="share"></div>
    share.appendChild(iconWrap);
    body.appendChild(share);
    
   // Now declare the for new added divs
   var IconsHolder = $('.iconWrap');
   var Ishare = $('.shareWrap');
   //fragment
     var frag = document.createDocumentFragment();
    
    //create all share Icons with loops
    for(i=0;i<spans.length;i++){
       var divsChild = document.createElement('span');
       //setting class to span with loops
       divsChild.className = spans[i];
       
       frag.appendChild(divsChild);
       IconsHolder.appendChild(frag);
     }
     
//Call function inside window.onload
CreateFontAwesome();// fontawesome load
createStyle(); //css load in head
ShowHideIcon(); // showhide button toggle 
makeLinkButton(); //share link for all
}

