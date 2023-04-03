$(".gallery-slader").slick({
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipe: true,

  prevArrow:
    '<button type="button" class="slick-prev"><img src="img/icon/arrowGalleryLeft.svg" alt="left"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img src="img/icon/arrowGalleryRight.svg" alt="left"></button>',
});
