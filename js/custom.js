$(document).ready(function(){
    // windows scrol
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();

        // back-to-top btn hide show js 
        if(scrolling > 500){
            $('.back-to-top i').fadeIn();
        }else{
            $('.back-to-top i').fadeOut();
        };

        // back-to-top
        $('.back-to-top i').click(function(){
            $('html,.banner-bg').animate({
                scrollTop : 0,
            },1000)
        });

        // nav-fix
        if(scrolling > 300){
            $('nav').addClass('nav-fix');
        }else{
            $('nav').removeClass('nav-fix');
        };
    });
    // windows scrol

    // banner-slide js 
    $('.banner-slide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed:2000,
        prevArrow: '<i class="fas fa-arrow-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-arrow-right next-btn"></i>',
    }); 

    $('.service-slider').slick({
        arrows: true,
        autoplay: false,
        autoplaySpeed:2000,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll:1,
        centerMode:true,
        centerPadding: '0px',
        prevArrow: '<i class="fas fa-arrow-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-arrow-right next-btn"></i>',
    });
    
  

// bg-1 slider 
    $('.img-slider').slick({
        arrows: true,
        autoplay: true,
        vertical:true,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor:'.text-slider',
        autoplaySpeed:2000,
        prevArrow: '<i class="fas fa-arrow-left prev-btn"></i>',
        nextArrow: '<i class="fas fa-arrow-right next-btn"></i>',
    });

    $('.text-slider').slick({
        arrows: false,
        autoplay: true,
        vertical:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // counter-js 
    $('.counter').counterUp({
    delay: 20,
    time: 3000,
        
    });

    // brand js 
    $('.brand-item').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
    });
});