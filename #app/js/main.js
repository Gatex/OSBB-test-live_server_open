
$(document).ready(function () {
   svg4everybody({});
   
   $('.photo__slider').slick({
      prevArrow: '.slick-prev',
      nextArrow: '.slick-next',
      // prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow.png">',
      // nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow.png">',
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 1,
      infinite: true,
   });
   
   $('.news__slider').slick({
      prevArrow: '.slick-prev1',
      nextArrow: '.slick-next1',
      // prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrow.png">',
      // nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrow.png">',
      dots: true,
      slidesToShow: 1,
      initialSlide: 1,
   });

   $('.menu__burger').on('click', function() {
      $('.menu__burger, .menu__list').toggleClass('active');
   });
   
});