//scripts

$(function () {
    var body = $("body");
    var header = $(".header");
    var closeButton = ($(".closebtn"), $(".closebtn"));
    var closediv = '<span class="fas fa-times togmenus closebtn"></span>';
    var year = new Date().getFullYear();
    var togButton = $(".togmenus");
    var gototop = $(".gototop");

    header.each(function () {
        header.find(".topnav").append(closediv);
        header.find(".togmenus").click(function () {
            body.toggleClass("togMenu");
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 40) {
            header.addClass("fix");
            gototop.addClass("show");
        } else {
            header.removeClass("fix");
            gototop.removeClass("show");
        }
    });

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

    $(".img-thumb").JqueryLazyImg();

    var monthFormat = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        postPerPage = 8;

    $(".blog-feat").each(function () {
        var nth = "https://1.bp.blogspot.com/-Al8VTaXtQBM/Xutv9A0CH-I/AAAAAAAADFo/VWJUtJc09pMsufQwwiXPpQTQ2BvamSaEwCLcBGAsYHQ/s320/no-img.png";
        var relPost = $(this);
        var relLabel = $(this).find("span").attr("data-label");
        var relType = $(this).find("span").attr("data-type");
        if (relType != undefined && relType.match("featured")) {
            $.ajax({
                url: "http://buddhalimbu.com.np/feeds/posts/default?orderby=published&alt=json-in-script&max-results=10",
                type: "get",
                dataType: "jsonp",
                beforeSend: function () {
                    relPost.append('<div class="wait"><div class="loading-icon"/></div>');
                },
                success: function (a) {
                    relPost.find(".wait").remove();
                    relPost.append('<div class="featured-post-wrapper"/>');
                    if (a.feed.entry) {
                        for (var t = 0; t < a.feed.entry.length; t++) {
                            for (var s = a.feed.entry[t], l = 0; l < a.feed.entry[t].link.length; l++)
                                if ("alternate" == a.feed.entry[t].link[l].rel) {
                                    var relHref = a.feed.entry[t].link[l].href;
                                    break;
                                }
                            if ("content" in s) var relSum = s.content.$t;
                            else relSum = "summary" in b_rc ? s.summary.$t : "";
                            170 < (relSum = relSum.replace(/<\S[^>]*>/g, "")).length && (relSum = relSum.substring(0, 100) + "...");
                            var postContent = s.content.$t;
                            if (postContent.indexOf("<img") > -1) {
                                var relThumb = s.media$thumbnail.url;
                            } else if (postContent.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) != null) {
                                var ytthumb = postContent.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
                                if (ytthumb.length == 11) {
                                    var relThumb = "'//img.youtube.com/vi/" + ytthumb + "/0.jpg'";
                                }
                            } else if (postContent.match(/src=(.+?[\.jpg|\.gif|\.png]")/) != null) {
                                relThumb = postContent.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1];
                            } else {
                                relThumb = nth;
                            }
                            if (s.category != null) {
                                for (cat = 0; cat < s.category.length; cat++) var relCat = s.category[cat].term;
                            } else {
                                relCat = "uncategorized";
                            }
                            var relTitle = s.title.$t,
                                relAuthor = s.author[0].name.$t,
                                p = s.published.$t,
                                c = p.substring(0, 4),
                                f = p.substring(5, 7),
                                relTime = p.substring(8, 10),
                                postTime = monthFormat[parseInt(f, 9)] + " " + relTime + ", " + c,
                                text = "view all",
                                bb = '<a class="simple-viewmore" href="/search/label/' + relTitle + '?&max-result=8">' + text + "</a>",
                                relBlock =
                                    '<div class="f-post"><div class="f-img"><a class="f-href" href="' +
                                    relHref +
                                    '"><img class="f-thumb" data-src="' +
                                    relThumb +
                                    '"/></a></div><div class="f-meta"><div class="f-label"><a href="/search/label/' +
                                    relCat +
                                    '?&max-result=10">' +
                                    relCat +
                                    '</a></div><div class="f-title"><h2><a href="' +
                                    relHref +
                                    '">' +
                                    relTitle +
                                    '</a></h2></div><div class="f-footer"><span class="f-author meta-author">' +
                                    relAuthor +
                                    '</span><span class="f-time meta-time">' +
                                    postTime +
                                    "</span></div></div></div>";
                            relPost.find(".featured-post-wrapper").append(relBlock), $(".f-thumb").JqueryLazyImg();
                        }
                    } else {
                        relPost.append('<div class="noposts"><span class="fas fa-burn"/> <span>no posts check your label once in widget</span></div>');
                    }
                },
            });
        }
    });

    $(".year").html(year);

    $(window).on("load", function () {
        $(".fix-loader").fadeOut("slow");
    });
});

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
