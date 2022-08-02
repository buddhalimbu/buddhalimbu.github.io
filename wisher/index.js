//JavaScript

let $ = (selector) => document.querySelector(selector);

let $$ = (selector) => document.querySelectorAll(selector);

var body = $("body");

var x = $(".wishnow");

var dClose = $(".d-close");

var quotes = [
    "No matter how far is the\n distance between us  we are\n always together.",
    "Good friends are like stars.\n You don't always see them,\n but you know they're\n always there.",
    "There are friends, there \n is family and then there are\n friends that become family.",
    "Many people will walk in \n and out of your life, but only true \n friends will leave footprints\n in your heart.",
    "A friend is one who overlooks\n your broken fence and admires the\n flowers in your garden.",
    "Be slow to fall into\n friendship; but when thou art in, continue\n firm & constant.",
    "A friend is someone who understands\n your past, believes in your future,\n and accepts you just\n the way you are.",
    "A true friend never gets\n in your\n way unless you happen\n to be going down.",
    "True friends are never apart,\n maybe in distance but never in heart.",
];

var getQuote = quotes[Math.floor(Math.random() * quotes.length)];

//colors

var colors = ["#ed6b5b", "#3a3e59", "#f9ac66", "#c36b84", "#4fa3a5", "#63c5ea", "#ea4b8b", "#4eb1b3"];

var color = colors[Math.floor(Math.random() * colors.length)];

x.onclick = () => {
    const xname = $(".wisher-name").value,
        fname = $(".f-name").value,
        loader = $(".myloader"),
        overlay = $(".overlay"),
        wrapper = $(".wrapper"),
        card = $(".mycard"),
        swish = $(".swish"),
        cardKit = $(".card-kit"),
        dear = $(".dear span");

    alert = $(".alert");

    if (fname === "" || xname === "") {
        alert.classList.add("show");
$('.msg').innerHTML = " Sorry , You did not enter the name in the textbox.";
        

        loader.classList.add("active");

        overlay.classList.add("active");

        setTimeout(function () {
            loader.classList.remove("active");
        }, 3000);
    } 
else if(!isNaN(fname) || !isNaN(xname)){
   alert.classList.add("show");
   $('.msg').innerHTML = " Sorry , You can not enter number in the textbox.";
        loader.classList.add("active");

        overlay.classList.add("active");

        setTimeout(function () {
            loader.classList.remove("active");
        }, 3000);
  }

else {
        $(".list-name").innerHTML = xname;

        $(".sname").innerHTML = fname;

        $(".swish").innerHTML = getQuote;

        loader.classList.add("active");

        $(".wish").classList.add("hide");

        wrapper.classList.add("active");

        card.style.borderLeftColor = [color];

        swish.style.color = [color];

        cardKit.style.borderColor = [color];

        dear.style.color = [color];

        $(".rd").style.backgroundColor = [color];

        setTimeout(function () {
            loader.classList.remove("active");
        }, 3000);
    }
};

function closeAll() {
    $(".overlay").classList.remove("active");

    $(".wish").classList.remove("hide");
};

$(".wish-again span").onclick = () => {
    $(".wisher-name").value = "";

    $(".f-name").value = "";

    $(".myloader").classList.add("active");

    $(".wish").classList.remove("hide");

    $(".wrapper").classList.remove("active");

    setTimeout(function () {
        $(".myloader").classList.remove("active");
    }, 3000);
};

function CopyMe() {
    const itemm = $(".copy");

    itemm.style.backgroundColor = [color];

    itemm.style.color = "#fff";

    const str = $(".swish").innerHTML;

    const x = document.createElement("textarea");
    x.value = str;

    document.body.appendChild(x);

    x.select();

    document.execCommand("copy");
    document.body.removeChild(x);

    //show alert

    $(".info").classList.add("active");

    setTimeout(function () {
        $(".info").classList.remove("active");
    }, 2000);
}

function ShareMe() {
    const xx = $(".share-wp");

    xx.style.backgroundColor = [color];

    xx.style.color = "#fff";

    var title = window.location.href;

    var str = $(".swish").innerHTML;

    var msg = encodeURIComponent(str) + " - " + title;

    var open_url = "https://api.whatsapp.com/send?text=" + msg;

    window.open(open_url, "_blank");
}

function capture() {
    const x = $("#ddl");

    x.style.backgroundColor = [color];

    x.style.color = "#fff";

    const captureElement = document.querySelector(".mycard");

    html2canvas(captureElement)
        .then((canvas) => {
            canvas.style.display = "none";

            document.body.appendChild(canvas);

            return canvas;
        })

        .then((canvas) => {
            const image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

            const a = document.createElement("a");

            a.setAttribute("download", "my-image.png");

            a.setAttribute("href", image);

            a.click();

            canvas.remove();
        });
}
