$(document).on('ready', function() {
  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    responsive:[{
      brakepoint:400,
      settings:{
      	slidesToShow: 2,
      	slidesToScroll: 2
      }
    }]
  });
});