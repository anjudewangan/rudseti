(function ($) {
    "use strict";

    // loader
    $(".loader-wrapper").fadeOut("slow", function () {
        $(this).remove();
    });
    // tap top
    $(".tap-top").on("click", function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            600
        );
        return false;
    });

    document.getElementById(
        "loader"
    ).innerHTML = `<div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div><div class="dot"></div>`;

    document.getElementById(
        "tap-top"
    ).innerHTML = `<i class="fa fa-chevron-up" aria-hidden="true"></i>`;

    document.getElementById(
        "header"
    ).innerHTML = `   <div class="header-wrapper row m-0"> <form class="form-inline search-full col" action="#" method="get"> <div class="form-group w-100"> <div class="Typeahead Typeahead--twitterUsers"> <div class="u-posRelative"> <input class="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search .." name="q" title="" autofocus> <div class="spinner-border Typeahead-spinner" role="status"><span class="sr-only">Loading...</span> </div> <i class="close-search" data-feather="x"></i> </div> <div class="Typeahead-menu"></div> </div> </div> </form> <div class="header-logo-wrapper col-auto p-0"> <div class="toggle-sidebar"><i class="status_toggle middle sidebar-toggle" data-feather="grid"> </i> </div> </div> <div class="left-header col horizontal-wrapper ps-0"> <div class="left-menu-header"> <ul class="app-list"> <li class="onhover-dropdown"> <div class="app-menu"> <i data-feather="folder-plus"></i></div> <ul class="onhover-show-div left-dropdown"> <li> <a href="file-manager.html">File Manager</a></li> <li> <a href="kanban.html"> Kanban board</a></li> <li> <a href="social-app.html"> Social App</a></li> <li> <a href="bookmark.html"> Bookmark</a></li> </ul> </li> </ul> <ul class="header-left"> <li class="onhover-dropdown"><a href="./index.html"><span class="f-w-600">Dashboard</span></a><span><i class="fa fa-angle-down" aria-hidden="true"></i></span> </li> <li class="onhover-dropdown"><span class="f-w-600">Forms</span><span><i class="fa fa-angle-down" aria-hidden="true"></i></span> <ul class="onhover-show-div left-dropdown"> <li class="flyout-right"><a href="javascript:void(0)">Inbound</a> <ul> <li> <a href="complaint.html">Complaint</a></li> <li> <a href="query.html">Query</a></li> </ul> </li> <li class="flyout-right"><a href="javascript:void(0)">Outbound</a> <ul> <li> <a href="information.html">Information</a></li> <!-- <li> <a href="feedback.html">Feedback</a></li> <li> <a href="tracking.html">Tracking</a></li> --> </ul> </li> </ul> </li> <li class="onhover-dropdown"><span class="f-w-600">User Management</span><span><i class="fa fa-angle-down" aria-hidden="true"></i></span> <ul class="onhover-show-div left-dropdown"> <li class="flyout-right"><a href="user-list.html">User List</a> </li> <li class="flyout-right"><a href="javascript:void(0)">Create New User</a> <ul> <li> <a href="addCaller.html">Caller</a></li> <li> <a href="addOther.html">Other</a></li> </ul> </li> </ul> </li> </ul> </div> </div> <div class="nav-right col-6 pull-right right-header p-0"> <ul class="nav-menus"> <li> <div class="right-header ps-0"> <div class="input-group"> <div class="input-group-prepend"><span class="input-group-text mobile-search"><i class="fa fa-search" aria-hidden="true"></i></span></div> <input class="form-control" type="text" placeholder="Search Here.."> </div> </div> </li> <li class="serchinput"> <div class="serchbox"><i class="fa fa-search" aria-hidden="true"></i></div> <div class="form-group search-form"> <input type="text" placeholder="Search here..."> </div> </li> <li> <div class="mode"><i class="fa fa-moon-o"></i></div> </li> <li class="onhover-dropdown"> <div class="notification-box"><i class="fa fa-bell-o" aria-hidden="true"></i></div> <ul class="notification-dropdown onhover-show-div"> <li> <h6 class="f-18 mb-0">Notifications</h6> </li> <li> <div class="d-flex align-items-center"> <div class="flex-shrink-0"><i class="fa fa-truck" aria-hidden="true"></i></div> <div class="flex-grow-1"> <p><a href="order-history.html">Delivery processing </a><span class="pull-right">6 hr</span></p> </div> </div> </li> <li> <div class="d-flex align-items-center"> <div class="flex-shrink-0"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div> <div class="flex-grow-1"> <p><a href="cart.html">Order Complete</a><span class="pull-right">3 hr</span></p> </div> </div> </li> <li> <div class="d-flex align-items-center"> <div class="flex-shrink-0"><i class="fa fa-file-text-o" aria-hidden="true"></i> </div> <div class="flex-grow-1"> <p><a href="invoice-template.html">Tickets Generated</a><span class="pull-right">1 hr</span></p> </div> </div> </li> <li> <div class="d-flex align-items-center"> <div class="flex-shrink-0"><i class="fa fa-paper-plane-o" aria-hidden="true"></i></i></div> <div class="flex-grow-1"> <p><a href="email_inbox.html">Delivery Complete</a><span class="pull-right">45 min</span></p> </div> </div> </li> <li><a class="btn btn-success" href="javascript:void(0)">Check all notification</a></li> </ul> </li> <li class="maximize"><i class="fa fa-expand" aria-hidden="true" onclick="javascript:toggleFullScreen()"></i> </li> <li class="language-nav"> <div class="translate_wrapper"> <div class="current_lang"> <div class="lang"><i class="fa fa-globe" aria-hidden="true"></i></div> </div> <div class="more_lang"> <div class="lang selected" data-value="en"><i class="flag-icon flag-icon-us"></i><span class="lang-txt">English<span> (US)</span></span></div> <div class="lang" data-value="in"><i class="flag-icon flag-icon-in"></i><span class="lang-txt">Hindi</span></div> </div> </div> </li> <li class="profile-nav onhover-dropdown"> <div class="account-user"> <img src="../assets/images/icons/user.webp" alt="" width="40px" height="40px"> </div> <ul class="profile-dropdown onhover-show-div"> <li><a href="user-profile.html"><i class="fa fa-user-o" aria-hidden="true"></i><span>Account</span></a> </li> <li><a href="change-password.html"><i class="fa fa-lock" aria-hidden="true"></i><span>Change Password</span></a> </li> <li><a href="../index.html"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a> </li> </ul> </li> </ul> </div> </div>`;


    document.getElementById(
        "footer"
    ).innerHTML = ` <footer class="footer"> <div class="container-fluid"> <div class="row"> <div class="col-md-12 text-center p-0"> <p class="mb-0">Copyright © Patio Digital 2024. All rights reserved.</p> </div> </div> </div> </footer>`;


    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 600) {
            $(".tap-top").fadeIn();
        } else {
            $(".tap-top").fadeOut();
        }
    });
    $(document).on("click", function (e) {
        var outside_space = $(".outside");
        if (
            !outside_space.is(e.target) &&
            outside_space.has(e.target).length === 0
        ) {
            $(".menu-to-be-close").removeClass("d-block");
            $(".menu-to-be-close").css("display", "none");
        }
    });

    $(".prooduct-details-box .close").on("click", function (e) {
        var order_details = $(this).closest('[class*=" col-"]').addClass("d-none");
    });

    if ($(".page-wrapper").hasClass("horizontal-wrapper")) {
        $(".sidebar-list").hover(
            function () {
                $(this).addClass("hoverd");
            },
            function () {
                $(this).removeClass("hoverd");
            }
        );
        $(window).on("scroll", function () {
            if ($(this).scrollTop() < 600) {
                $(".sidebar-list").removeClass("hoverd");
            }
        });
    }

    /*----------------------------------------
       passward show hide
       ----------------------------------------*/
    $(".show-hide").show();
    $(".show-hide span").addClass("show");

    $(".show-hide span").on("click", function () {
        if ($(this).hasClass("show")) {
            $('input[name="login[password]"]').attr("type", "text");
            $(this).removeClass("show");
        } else {
            $('input[name="login[password]"]').attr("type", "password");
            $(this).addClass("show");
        }
    });
    $('form button[type="submit"]').on("click", function () {
        $(".show-hide span").addClass("show");
        $(".show-hide")
            .parent()
            .find('input[name="login[password]"]')
            .attr("type", "password");
    });

    /*=====================
        02. Background Image js
        ==========================*/
    $(".bg-center").parent().addClass("b-center");
    $(".bg-img-cover").parent().addClass("bg-size");
    $(".bg-img-cover").each(function () {
        var el = $(this),
            src = el.attr("src"),
            parent = el.parent();
        parent.css({
            "background-image": "url(" + src + ")",
            "background-size": "cover",
            "background-position": "center",
            display: "block",
        });
        el.hide();
    });

    $(".mega-menu-container").css("display", "none");
    $(".header-search").on("click", function () {
        $(".search-full").addClass("open");
    });
    $(".close-search").on("click", function () {
        $(".search-full").removeClass("open");
        $("body").removeClass("offcanvas");
    });
    $(".mobile-toggle").on("click", function () {
        $(".nav-menus").toggleClass("open");
    });
    $(".mobile-toggle-left").on("click", function () {
        $(".left-header").toggleClass("open");
    });
    $(".bookmark-search").on("click", function () {
        $(".form-control-search").toggleClass("open");
    });
    $(".filter-toggle").on("click", function () {
        $(".product-sidebar").toggleClass("open");
    });
    $(".toggle-data").on("click", function () {
        $(".product-wrapper").toggleClass("sidebaron");
    });

    $(".mobile-search").on("click", function () {
        $(".form-control").toggleClass("open");
    });

    $(".form-control-search input").keyup(function (e) {
        if (e.target.value) {
            $(".page-wrapper").addClass("offcanvas-bookmark");
        } else {
            $(".page-wrapper").removeClass("offcanvas-bookmark");
        }
    });
    $(".search-full input").keyup(function (e) {
        if (e.target.value) {
            $("body").addClass("offcanvas");
        } else {
            $("body").removeClass("offcanvas");
        }
    });

    $("body").keydown(function (e) {
        if (e.keyCode == 27) {
            $(".search-full input").val("");
            $(".form-control-search input").val("");
            $(".page-wrapper").removeClass("offcanvas-bookmark");
            $(".search-full").removeClass("open");
            $(".search-form .form-control-search").removeClass("open");
            $("body").removeClass("offcanvas");
        }
    });
    $(".mode").on("click", function () {
        $(".mode i").toggleClass("fa-moon-o").toggleClass("fa-lightbulb-o");
        $("body").toggleClass("dark-only");
        var color = $(this).attr("data-attr");
        localStorage.setItem("body", "dark-only");
    });

    // active link

    $(".chat-menu-icons .toogle-bar").on("click", function () {
        $(".chat-menu").toggleClass("show");
    });

    $(".mobile-title svg").on("click", function () {
        $(".header-mega").toggleClass("d-block");
    });

    $(".onhover-dropdown").on("click", function () {
        $(this).children(".onhover-show-div").toggleClass("active");
    });
    // search input
    $(".serchbox").on("click", function (e) {
        $(".search-form").toggleClass("open");
        e.preventDefault();
    });

    //landing header //
    $(".toggle-menu").on("click", function () {
        $(".landing-menu").toggleClass("open");
    });
    $(".menu-back").on("click", function () {
        $(".landing-menu").toggleClass("open");
    });

    $(".md-sidebar-toggle").on("click", function () {
        $(".md-sidebar-aside").toggleClass("open");
    });

    // color selector
    $(".color-selector ul li ").on("click", function (e) {
        $(".color-selector ul li").removeClass("active");
        $(this).addClass("active");
    });

    //extra
    $(document).ready(function () {
        // $('body').addClass('box-layout');
    });

    (function ($, window, document, undefined) {
        "use strict";
        var $ripple = $(".js-ripple");
        $ripple.on("click.ui.ripple", function (e) {
            var $this = $(this);
            var $offset = $this.parent().offset();
            var $circle = $this.find(".c-ripple__circle");
            var x = e.pageX - $offset.left;
            var y = e.pageY - $offset.top;
            $circle.css({
                top: y + "px",
                left: x + "px",
            });
            $this.addClass("is-active");
        });
        $ripple.on(
            "animationend webkitAnimationEnd oanimationend MSAnimationEnd",
            function (e) {
                $(this).removeClass("is-active");
            }
        );
    })(jQuery, window, document);

    // Language
    var tnum = "en";

    $(document).ready(function () {
        if (localStorage.getItem("primary") != null) {
            var primary_val = localStorage.getItem("primary");
            $("#ColorPicker1").val(primary_val);
            var secondary_val = localStorage.getItem("secondary");
            $("#ColorPicker2").val(secondary_val);
        }

        $(document).on("click", function (e) {
            $(".translate_wrapper, .more_lang").removeClass("active");
        });
        $(".translate_wrapper .current_lang").on("click", function (e) {
            e.stopPropagation();
            $(this).parent().toggleClass("active");

            setTimeout(function () {
                $(".more_lang").toggleClass("active");
            }, 5);
        });

        /*TRANSLATE*/
        translate(tnum);

        $(".more_lang .lang").on("click", function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(".more_lang").removeClass("active");

            var i = $(this).find("i").attr("class");
            var lang = $(this).attr("data-value");
            var tnum = lang;
            translate(tnum);

            $(".current_lang .lang-txt").text(lang);
            $(".current_lang i").attr("class", i);
        });
    });

    function translate(tnum, index) {
        for (var i = 1; i <= 9; i++) {
            $(".lan-" + i).text(trans[i - 1][tnum]);
        }
    }

    var trans = [
        {
            en: "General",
            pt: "Geral",
            es: "Generalo",
            fr: "GÃ©nÃ©rale",
            de: "Generel",
            cn: "ä¸€èˆ¬",
            ae: "Ø­Ø¬Ù†Ø±Ø§Ù„ Ù„ÙˆØ§Ø¡",
        },
        {
            en: "Dashboard,widgets & layout.",
            pt: "PainÃ©is, widgets e layout.",
            es: "Paneloj, fenestraÄµoj kaj aranÄo.",
            fr: "Tableaux de bord, widgets et mise en page.",
            de: "Dashboard, widgets en lay-out.",
            cn: "ä»ªè¡¨æ¿ï¼Œå°å·¥å…·å’Œå¸ƒå±€ã€‚",
            ae: "Ù„ÙˆØ­Ø§Øª Ø§Ù„Ù…Ø¹Ù„ÙˆÙ…Ø§Øª ÙˆØ§Ù„Ø£Ø¯ÙˆØ§Øª ÙˆØ§Ù„ØªØ®Ø·ÙŠØ·.",
        },
        {
            en: "Dashboard",
            pt: "PainÃ©is",
            es: "Paneloj",
            fr: "Tableaux",
            de: "Dashboard",
            cn: " ä»ªè¡¨æ¿ ",
            ae: "ÙˆØ­Ø§Øª Ø§Ù„Ù‚ÙŠØ§Ø¯Ø© ",
        },
        {
            en: "Default",
            pt: "PadrÃ£o",
            es: "Vaikimisi",
            fr: "DÃ©faut",
            de: "Standaard",
            cn: "é›»å­å•†å‹™",
            ae: "ÙˆØ¥ÙØªØ±Ø§Ø¶ÙŠ",
        },
        {
            en: "Ecommerce",
            pt: "ComÃ©rcio eletrÃ´nico",
            es: "Komerco",
            fr: "Commerce Ã©lectronique",
            de: "E-commerce",
            cn: "é›»å­å•†å‹™",
            ae: "ÙˆØ§Ù„ØªØ¬Ø§Ø±Ø© Ø§Ù„Ø¥Ù„ÙƒØªØ±ÙˆÙ†ÙŠØ©",
        },
        {
            en: "Widgets",
            pt: "Ferramenta",
            es: "Vidin",
            fr: "Widgets",
            de: "Widgets",
            cn: "å°éƒ¨ä»¶",
            ae: "ÙˆØ§Ù„Ø­Ø§Ø¬ÙŠØ§Øª",
        },
        {
            en: "Page layout",
            pt: "Layout da pÃ¡gina",
            es: "PaÄa aranÄo",
            fr: "Tableaux",
            de: "Mise en page",
            cn: "é é¢ä½ˆå±€",
            ae: "ÙˆØªØ®Ø·ÙŠØ· Ø§Ù„ØµÙØ­Ø©",
        },
        {
            en: "Applications",
            pt: "FormulÃ¡rios",
            es: "Aplikoj",
            fr: "Applications",
            de: "Toepassingen",
            cn: "æ‡‰ç”¨é ˜åŸŸ",
            ae: "ÙˆØ§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
        },
        {
            en: "Ready to use Apps",
            pt: "Pronto para usar aplicativos",
            es: "Preta uzi Apps",
            fr: " Applications prÃªtes Ã  lemploi ",
            de: "Klaar om apps te gebruiken",
            cn: "ä»ªè¡¨æ¿",
            ae: "Ø¬Ø§Ù‡Ø² Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… Ø§Ù„ØªØ·Ø¨ÙŠÙ‚Ø§Øª",
        },
    ];
})(jQuery);

function toggleFullScreen() {
    if (
        (document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)
    ) {
        if (document.documentElement.requestFullScreen) {
            document.documentElement.requestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            document.documentElement.webkitRequestFullScreen(
                Element.ALLOW_KEYBOARD_INPUT
            );
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}
