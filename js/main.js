$(function($){

    $('.images').slick({  
        arrows: true,    
        dots: true,  
        centerMode: false, 
        centerPadding: '40%', 
        infinite: true,
        autoplay: true,
        pauseOnHover: true,
        prevArrow: '<img src="矢印.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="矢印.png" class="slide-arrow next-arrow">',
        slidesToShow: 1,
    })

});