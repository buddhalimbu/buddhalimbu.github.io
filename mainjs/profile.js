//
//============================================
//Jquery Scripts
//https://buddhalimbu.com.np
//https://buddhalimbu.github.io
//============================================

//Star the function

$(function () {
	//setting up variables;
    var body = $("body");
    var header = $(".header");
    var closeButton = ($(".closebtn"), $(".closebtn"));
    var closediv = '<span class="fas fa-times togmenus closebtn"></span>';
    var year = new Date().getFullYear();
    var togButton = $(".togmenus");
    var gototop = $(".gototop");
    var sharemenu = $('.widget-share-menu');

    //header and menu toggle for mobile devices or small screens
    header.each(function () {
        header.find(".topnav").append(closediv);
        header.find(".togmenus").click(function () {
            body.toggleClass("togMenu");
            body.toggleClass("togsharemenu");
        });
    });

    //window scroll function to show and fix header 
    $(window).on('scroll',function () {
    	var minheight = 40;
    	var maxheight = $('.contact').height();
        if ($(this).scrollTop() > minheight ) {
            header.addClass("fix");
            gototop.addClass("show");
        } 
        else {
            header.removeClass("fix");
            gototop.removeClass("show");
        }
    });


    //Open modal clicking in the img 
    $(".port-box").click(function () {
        var modal = $("#imgmodal"),
            img = $("#imgformodal"),
            caption = $("#modal-caption"),
            thisimg = $(this).find("img"),
            imgsrc = thisimg.attr("data-src"),
            mainimg = imgsrc.replace("/s72-c", "/w1600"),
            imgcap = thisimg.attr("alt");
        modal.slideToggle(100);
        img.attr("src", mainimg);
        caption.html(imgcap);
    });
    $(".imgmodal").click(function (e) {
        e.preventDefault();
        var modal = $("#imgmodal");
        modal.slideToggle(100);
    });
    $(".modal-close").click(function () {
        "#imgmodal".slideToggle(100);
    });

    //lazyload script for images to automatically create the image source when the page load , scroll or resize
    //Only works the scrip to lazify the images uploaded on the blogger.com website.
    //Other platform images will get the it original height and width
    !(function (lazyload) {
        lazyload.fn.JqueryLazyImg = function () {
            return this.each(function () {
                var x = lazyload(this),
                    imgtype = x.attr("data-src"),
                    imgwidth = Math.round(x.width()),
                    imgheight = Math.round(x.height()),
                    imgsize = "/w" + imgwidth + "-h" + imgheight + "-p-k-no-nu",
                    postimg = "";
                if (imgtype.match("s72-c")) {
                    postimg = imgtype.replace("/s72-c", imgsize);
                } else if (imgtype.match("w72-h")) {
                    postimg = imgtype.replace("/w72-h72-p-k-no-nu", imgsize);
                } else {
                    postimg = imgtype;
                }
                lazyload(window).on("load scroll resize", lazyimgonscroll);
                function lazyimgonscroll() {
                    var windowHeight = lazyload(window).height(),
                        scrollTop = lazyload(window).scrollTop(),
                        offsetTop = x.offset().top;
                    if (scrollTop + windowHeight > offsetTop) {
                        var newImg = new Image();
                        (newImg.onload = function () {
                            x.attr("src", this.src).addClass("lazy-img");
                        }),
                            (newImg.src = postimg);
                    }
                }
                lazyimgonscroll();
            });
        };
    })(jQuery);

    //lazyloading images
    $(".img-thumb").JqueryLazyImg();

    //Printing curent year
    $(".year").html(year);

    //Hide loader on after page full load or windo loads up
    $(window).on("load", function () {
        $(".fix-loader").fadeOut("slow");
    });
});
//Goto hash href clicking on anchor tags
$(function () {
    $("a[href*=\\#]:not([href=\\#])").on("click", function () {
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
        if (target.length) {
            $("html,body").animate({ scrollTop: target.offset().top }, 1000);
            return false;
        }
    });
});

//mailto function on click Gmail
$(function () {
    $(".formbutton").on("click", function (event) {
        event.preventDefault();
        var email = "buddhalimbu157@gmail.com";
        var subject = $("#subject").val();
        var msg = $(".textarea").val();
        if (msg.length == "") {
            alert("Type Messages");
        } else {
            window.location = "mailto:" + email + "?subject=" + subject + "&body=" + msg;
        }
    });
});

//Working share menu click on the icons
$(document).ready(function () {
    var link = $(location).attr("href");
    $(".widget-share-menu")
        .find(".fb")
        .click(function () {
            var url = "https://facebook.com/sharer.php?u=" + link;
            window.open(url, "_blank");
        });
    $(".widget-share-menu")
        .find(".tw")
        .click(function () {
            var url = "https://twitter.com/share?url=" + link;
            window.open(url, "_blank");
        });
    $(".widget-share-menu")
        .find(".ln")
        .click(function () {
            var url = "https://www.linkedin.com/shareArticle?mini=true&url=" + link;
            window.open(url, "_blank");
        });
    $(".widget-share-menu")
        .find(".wa")
        .click(function () {
            var url = "https://api.whatsapp.com/send?text=" + link;
            window.open(url, "_blank");
        });
    $(".widget-share-menu")
        .find(".pn")
        .click(function () {
            var url = "https://www.pinterest.com/pin/create/button/?url=" + link;
            window.open(url, "_blank");
        });
});

//===========================
/*Ended the script*/
//===========================
