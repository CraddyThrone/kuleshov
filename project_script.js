$('.slides').slick({
    arrows: false,
    dots: false,
    draggable: false,
    slidesToShow: 1,
    appendArrows: $('.arrows'),
})

$('.comments__arrow-l-cont').on('click', function(e) {
    
    $('.slides').slick('slickPrev')
})

$('.comments__arrow-r-cont').on('click', function(e) {
   
    $('.slides').slick('slickNext')
})

$('.comments__arrow-m-l-cont').on('click', function(e) {
    
    $('.slides').slick('slickPrev')
})

$('.comments__arrow-m-r-cont').on('click', function(e) {
   
    $('.slides').slick('slickNext')
})