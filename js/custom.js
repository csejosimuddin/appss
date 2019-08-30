
// Custom js INDEX Table

// 01.preloader js
// 02.Closes responsive menu when a scroll link is clicked
// 03.Banner slider js
// 04.Testimonial slider
// 05.counter up js
// 06.swiper Slider
// 07.sticky nav
// 08.animation scroll js
// 09.back to top



(function ($) {

    'use strict';
    var windo = $(window);

//preloader js start here
    $(window).on('load', function () {
    $("#preloader").delay(1000).fadeOut(1000);
    });

  
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

 //venobox js
    $('.venobox').venobox();


// swiperslider-section
   var mySwiper = new Swiper('.swiper-container.one', {
        effect: 'coverflow',
        speed: 3000,
        autoplay: {
            delay: 3000,
        },
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
        },
    });



//testmonial slider 
$('.testimonial1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay:true,
  fade: false,
  asNavFor: '.testimonial2'
});
$('.testimonial2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial1',
  dots: false,
  autoplay:true,
  centerMode: true,
    centerPadding:false,
     arrows: false,
  focusOnSelect: true
});

        // sticky nav
    /*----------------------------
       START - Menubar scroll animation
       ------------------------------ */
       $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 500){
        $(".header-bottom").addClass("sticky");
    }
    else{
        $(".header-bottom").removeClass("sticky");
    }
    if(scrolling > 400){
        back2top.fadeIn(800);
    }
    else {
        back2top.fadeOut(800);
    }
        
        
});


  //animation scroll js click a smoth scroll button a click a
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 90
                }, 1500);
                return false;
            }
        }
    });


 
   //    back to top jquery section
    
    var html_body = $('html, body');
    var back2top = $(".back-to-top");
    back2top.click(function(){
       html_body.animate({scrollTop:0}, 1000); 
    });
 







})(jQuery);