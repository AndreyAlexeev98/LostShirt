$(document).ready ( () => {


  $('.product__size__item--active').on("click", function() {
    $('.product__size__item--active').removeClass('product__size__item--choice');
    $(this).addClass('product__size__item--choice');
  });


});