var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
);
wow.init();




$(document).ready(function(e){
    //home-page

    //promote
    $('#promote').addClass('active');

    $('.light-box').addClass('active');

    $('.close').click(function(e){
        $('#promote').removeClass('active');
        $('.light-box').removeClass('active');
    });


    //hamburger menu
    $('.bottom-bar .list .hamburger-control').click(function(e){
        let display = $('.nav').css('display');
        if(display=="none"){
            $('.nav').css('display','block');
        }
        else{
            $('.nav').css('display','none');
        }
    });

    //drop-link
    $('#header .bottom-bar .nav ul li .drop-link').click(function(e){
        let w = $(window).width();
        if(w<1024){
            $(e.currentTarget).siblings('.drop').toggleClass('open');
        }
    });

    $('#header .bottom-bar .nav ul li .sub-drop-link').click(function(e){
        let w = $(window).width();
        if(w<1024){
            $(e.currentTarget).siblings('div').toggleClass('open');
        }
    });

    //search pop-up
    $('.bottom-bar .search').click(function(e){
        $('.search-popup').addClass('active');
    });
    $('.search-popup .close').click(function(e){
        $('.search-popup').removeClass('active');
    });

    //slick
    $('.lg-right .slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });

    $('.tab-slick').slick({
        infinite: true,
        dots: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
            breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.best-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    $('.auto-wrap').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
                }
            },
            {
            breakpoint: 600,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    });

    //tab control
    $('#content .products .tab-nav ul li a').click(function(e){
        e.preventDefault();
        let number = $(this).closest('li').index();
        console.log(number);
        $('.tab-nav ul li').removeClass('active').eq(number).addClass('active');
        $('.k').removeClass('active').eq(number).addClass('active');
        $('.k').addClass('tab');
        $('.k').eq(number).removeClass('tab');
        
    });

    
    //go-top
    $('#go-top a').click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        let offset = $(target).offset();
        $("body,html").animate({scrollTop:offset.top});
    });

    $(document).scroll(function(e){
        if(scrollY>100){
            $('#go-top').addClass('active');
        }
        else{
            $('#go-top').removeClass('active');
        }
    });

    // icon adjust
    $('#content .products .tab-content .hover-wrap .hover-info ul li button').click(function(e){
        $(e.currentTarget).toggleClass('red');
    });

    $('#content .best-seller  .hover-wrap .hover-info ul li button').click(function(e){
        $(e.currentTarget).toggleClass('red');
    });

    $('.hover-info ul li.like button').click(function(e){
        $(e.currentTarget).toggleClass('icon-heart icon-heart-empty');
    });

    //About page

    //cart-detail
    $('#header .bottom-bar .cart-with-number a').click(function(e){
        $(e.currentTarget).toggleClass('show');
        $(e.currentTarget).siblings('span').toggleClass('show');
        $(e.currentTarget).siblings('.drop').toggleClass('show');
        $(e.currentTarget).siblings('.cart-background').toggleClass('show');
    });
    $('#header .bottom-bar .cart-with-number .cart-background').click(function(e){
        $(e.currentTarget).removeClass('show');
        $(e.currentTarget).siblings('span').removeClass('show');
        $(e.currentTarget).siblings('a').removeClass('show');
        $(e.currentTarget).siblings('.drop').removeClass('show');
    });

    //side-bar
    $('.side-open-link').click(function(e){
        $('.side-control').toggleClass('active');
        $('.side-bar-background').addClass('active');
    });

    $('.side-bar-background').click(function(e){
        $(e.currentTarget).removeClass('active');
        $('.side-control').toggleClass('active');
    });

    $('.side-menu .close a').click(function(e){
        $('.side-control').toggleClass('active');
        $('.side-bar-background').removeClass('active');
    });

    $('.work-slider').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '10%',
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '10%',
                infinite: true,
                dots: true
                }
            },
            {
            breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20%',
                }
            },
            {
            breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20%',
                dots: false
                }
            }
        ]
    });
});