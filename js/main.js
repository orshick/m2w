(function ($){

var $portfolio;
var $masonry_block;
var $portfolio_selectors;
var $portfolio_selectors_li;
var $blog;
var hashfilter;

$(document).ready(function () {

    // Show Animated Counters
    animatecounters();
    
    /* ===================================
    counter number reset while scrolling
    ====================================== */

    /*==============================================================*/
    //Smooth Scroll - START CODE
    /*==============================================================*/
    jQuery('.inner-top').smoothScroll({
        speed: 900,
        offset: -68
    });
    /*==============================================================*/
    //Smooth Scroll - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Resize Header Menu - START CODE
    /*==============================================================*/
    SetResizeHeaderMenu();
    /*==============================================================*/
    //Set Resize Header Menu - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //For shopping cart- START CODE
    /*==============================================================*/

    /*==============================================================*/
    //Shrink nav on scroll - START CODE
    /*==============================================================*/

    if ($(window).scrollTop() > 16) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
    /*==============================================================*/
    //Shrink nav on scroll - END CODE
    /*==============================================================*/


    /*==============================================================*/
    //Portfolio - START CODE
    /*==============================================================*/
    // code slotted into /js/main-portfolio-partial.js
    /*==============================================================*/
    //Portfolio - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Set Parallax - START CODE
    /*==============================================================*/
    SetParallax();
    /*==============================================================*/
    //Set Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Sliders owlCarousel - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //Sliders owlCarousel - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //PieChart For Onepage - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //PieChart For Onepage - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //Stop Closing magnificPopup on selected elements - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Revolution Slider  - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //Revolution Slider  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //WOW Animation  - START CODE
    /*==============================================================*/

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 90,
        mobile: false,
        live: true
    });
    wow.init();
    /*==============================================================*/
    //WOW Animation  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //accordion  - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //accordion - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //toggles  - START CODE
    /*==============================================================*/

    $('toggles .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-minus"></i>');
    });
    $('toggles .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-plus"></i>');
    });
    $('.toggles-style2 .collapse').on('show.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-up"></i>');
    });
    $('.toggles-style2 .collapse').on('hide.bs.collapse', function () {
        var id = $(this).attr('id');
        $('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-accordion');
        $('a[href="#' + id + '"] .panel-title span').html('<i class="fa fa-angle-down"></i>');
    });
    /*==============================================================*/
    //toggles  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //fit video  - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //fit video  - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search - START CODE
    /*==============================================================*/

    /*==============================================================*/
    //Search - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //Parallax - START CODE
    /*==============================================================*/

    var $elem = $('#content');
    $('#scroll_to_top').fadeIn('slow');
    $('#nav_down').fadeIn('slow');
    $(window).bind('scrollstart', function () {
        $('#scroll_to_top,#nav_down').stop().animate({'opacity': '0.2'});
    });
    $(window).bind('scrollstop', function () {
        $('#scroll_to_top,#nav_down').stop().animate({'opacity': '1'});
    });
    $('#nav_down').click(
            function (e) {
                $('html, body').animate({scrollTop: $elem.height()}, 800);
            }
    );
    $('#scroll_to_top').click(
            function (e) {
                $('html, body').animate({scrollTop: '0px'}, 800);
            }
    );
    /*==============================================================*/
    //Parallax - END CODE
    /*==============================================================*/

    /*==============================================================*/
    //FORM TO EMAIL - START CODE
    /*==============================================================*/
    $("#success").hide();

    $("#contact-us-button").click(function () {
        var error = validationContactUsForm();
        if (error) {
            $.ajax({
                type: "POST",
                url: templateDir,
                data: $("#contactusform").serialize(),
                success: function (result) {
                    $('input[type=text],textarea').each(function () {
                        $(this).val('');
                    })
                    console.log(result);
                    $("#success").html(result);
                    $("#success").fadeIn("slow");
                    $('#success').delay(4000).fadeOut("slow");
                }
            });
        }
    });
    function validationContactUsForm() {
        var error = true;
        $('#contactusform input[type=text]').each(function (index) {
            if (index == 1) {
                if (!(/(.+)@(.+){2,}\.(.+){2,}/.test($(this).val()))) {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                } else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
            else if (index == 0) {
                if ($(this).val() == null || $(this).val() == "") {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid red"});
                    error = false;
                }
                else {
                    $("#contactusform").find("input:eq(" + index + ")").css({"border": "1px solid #dfdfdf"});
                }
            }
        });
        return error;
    }


    /*==============================================================*/
    //FORM TO EMAIL - END CODE
    /*==============================================================*/

    // pull-menu close on href click event in mobile devices
    $('.pull-menu a.inner-link')
            .click(function (e) {
                    $('#close-button').click();
            });
});

    function animatecounters() {
    
    /*==============================================================*/
    //Counter Number - START CODE
    /*==============================================================*/

    $('.timer').each(count);
        function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
        }
    /*==============================================================*/
    //Counter Number - END CODE
    /*==============================================================*/
    
    }

var inViewchart = false;
var inViewanimnumberpizza = false;
var inViewanimnumberclient = false;
var inViewanimnumberprojects = false;
var inViewanimnumbercomments = false;
var inViewcounter1 = false;
var inViewcounter2 = false;
var inViewcounter3 = false;
var inViewcounter4 = false;
var inViewcounter5 = false;
var inViewcounter6 = false;
var inViewcounter7 = false;

function isScrolledIntoView(elem) {
    try {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
    }
    catch (ex) {
        return false;
    }


}



/*==============================================================*/
//Navigation - START CODE
/*==============================================================*/
// Shrink nav on scroll
$(window).scroll(function () {
    if ($(window).scrollTop() > 16) {
        $('nav').addClass('shrink-nav');
    } else {
        $('nav').removeClass('shrink-nav');
    }
});


// Resize Header Menu
function SetResizeHeaderMenu() {
    var width = jQuery('nav.navbar').children('div.container').width();
    $("ul.mega-menu-full").each(function () {
        jQuery(this).css('width', width + 'px');
    });
}
/*==============================================================*/
//Navigation - END CODE
/*==============================================================*/


/*==============================================================*/
//Parallax - START CODE
/*==============================================================*/
// Parallax Fix Image Scripts 

$('.parallax-fix').each(function () {
    if ($(this).children('.parallax-background-img').length) {
        var imgSrc = jQuery(this).children('.parallax-background-img').attr('src');
        jQuery(this).css('background', 'url("' + imgSrc + '")');
        jQuery(this).children('.parallax-background-img').remove();
        $(this).css('background-position', '50% 0%');
    }

});
var IsParallaxGenerated = false;
function SetParallax() {
    if ($(window).width() > 200 && !IsParallaxGenerated) {
        //Deleted unused parallax settings. more in original template
        $('.parallax13').parallax("50%", 1.4);
        $('.split-background-top').parallax("50%", 0.14);
        $('.split-background-bottom').parallax("50%", 0.12);
        IsParallaxGenerated = true;
    }
}
/*==============================================================*/
//Parallax - END CODE
/*==============================================================*/

/*==============================================================*/
//Mobile Toggle Control - START CODE
/*==============================================================*/

$('.mobile-toggle').click(function () {
    $('nav').toggleClass('open-nav');
});
$('.dropdown-arrow').click(function () {
    if ($('.mobile-toggle').is(":visible")) {
        if ($(this).children('.dropdown').hasClass('open-nav')) {
            $(this).children('.dropdown').removeClass('open-nav');
        } else {
            $('.dropdown').removeClass('open-nav');
            $(this).children('.dropdown').addClass('open-nav');
        }
    }
});
/*==============================================================*/
//Mobile Toggle Control - END CODE
/*==============================================================*/

/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - START CODE
/*==============================================================*/
$('.dropdown-fullwidth').each(function () {
    $(this).css('width', $('.row').width());
    var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
    $(this).css('left', subNavOffset);
});
/*==============================================================*/
//Position Fullwidth Subnavs fullwidth correctly - END CODE
/*==============================================================*/

/*==============================================================*/
//Smooth Scroll - START CODE
/*==============================================================*/

/*==============================================================*/
//Smooth Scroll - END CODE
/*==============================================================*/

/*==============================================================*/
//Full Screen Header - START CODE
/*==============================================================*/

function SetResizeContent() {
    var minheight = $(window).height();
    $(".full-screen").css('min-height', minheight);
    
    var minwidth = $(window).width();
    $(".full-screen-width").css('min-width', minwidth);
}

SetResizeContent();
/*==============================================================*/
//Full Screen Header - END CODE
/*==============================================================*/


/*==============================================================*/
//Window Resize Events - START CODE
/*==============================================================*/
$(window).resize(function () {
    //Position Fullwidth Subnavs fullwidth correctly
    $('.dropdown-fullwidth').each(function () {
        $(this).css('width', $('.row').width());
        var subNavOffset = -($('nav .row').innerWidth() - $('.menu').innerWidth() - 15);
        $(this).css('left', subNavOffset);
    });
    SetResizeContent();
    setTimeout(function () {
        SetResizeHeaderMenu();
    }, 200);
    if ($(window).width() >= 992 && $('.navbar-collapse').hasClass('in')) {
        $('.navbar-collapse').removeClass('in');
        //$('.navbar-collapse').removeClass('in').find('ul.dropdown-menu').removeClass('in').parent('li.dropdown').addClass('open');
        $('.navbar-collapse ul.dropdown-menu').each(function () {
            if ($(this).hasClass('in')) {
                $(this).removeClass('in'); //.parent('li.dropdown').addClass('open');
            }
        });
        $('ul.navbar-nav > li.dropdown > a.dropdown-toggle').addClass('collapsed');
        $('.logo').focus();
        $('.navbar-collapse a.dropdown-toggle').removeClass('active');
    }

    setTimeout(function () {
        SetParallax();
    }, 1000);
});
/*==============================================================*/
//Window Resize Events - END CODE
/*==============================================================*/

/*==============================================================*/
//Countdown Timer - START CODE
/*==============================================================*/

/*==============================================================*/
//Countdown Timer - END CODE
/*==============================================================*/


/*==============================================================*/
//Scroll To Top - START CODE
/*==============================================================*/

/*==============================================================*/
//Scroll To Top - END CODE
/*==============================================================*/

$('nav.full-width-pull-menu ul.panel-group li.dropdown a.dropdown-toggle').click(function () {
    if ($(this).parent('li').find('ul.dropdown-menu').length > 0)
    {
        if ($(this).parent('li').hasClass('open')) {
            $(this).parent('li').removeClass('open');
        }
        else{
            $(this).parent('li').addClass('open');
        }
    }
});

// pull-menu close on href click event in mobile devices
$('.pull-menu a.section-link').click(function (e) {
    if ($(window).width() <= 500)
        $('#close-button').click();
});

/*==============================================================*/
// Main navigation href
/*==============================================================*/

$(document).ready(function () {
    $(document).on('click', '.menu-first-level > a:first-child', function() {
        var geturl = $(this).attr('data-redirect-url');
        if(geturl != '#' && geturl != ''){
            if ( $(this).attr('target') == '_blank') {
                window.open(geturl, '_blank');
            }else{
                window.location = geturl;
            }
        }
    });
});

})(jQuery);
