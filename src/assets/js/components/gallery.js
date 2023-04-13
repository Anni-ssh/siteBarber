$(".gallery-slader").slick({
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  swipe: true,

  prevArrow:
    '<button type="button" class="slick-prev"><img src="assets/images/icon/arrowGalleryLeft.svg" alt="left"></button>',
  nextArrow:
    '<button type="button" class="slick-next"><img src="assets/images/icon/arrowGalleryRight.svg" alt="left"></button>',

  responsive: [
    {
      breakpoint: 500,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
      },
    },
  ],
});
