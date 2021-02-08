$('.slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('.header__promo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('.items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-prev"><img class="slick-btn__img" src="./img/seta_.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-btn slick-next"><img class="slick-btn__img" src="./img/seta_right.png" alt=""></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});


$('.items-gallery').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-btn_gallery slick-prev"><img class="slick-btn__img" src="./img/seta_.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-btn slick-btn_gallery slick-next"><img class="slick-btn__img" src="./img/seta_right.png" alt=""></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});

$('.items-gallery-usa').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-btn slick-btn_gallery-usa slick-prev_usa "><img class="slick-btn__img" src="./img/seta_.png" alt=""></button>',
  nextArrow: '<button type="button" class="slick-btn slick-btn_gallery-usa slick-next_usa "><img class="slick-btn__img" src="./img/seta_right.png" alt=""></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
});