$(function($){

    $('.images').slick({  
        arrows: true,    
        dots: false,  
        centerMode: false, 
        centerPadding: '40%', 
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        prevArrow: '<img src="/images/矢印.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="/images/矢印.png" class="slide-arrow next-arrow">',
        slidesToShow: 1,
        responsive: [{
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
        }]
    })

});