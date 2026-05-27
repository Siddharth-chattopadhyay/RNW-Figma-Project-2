/** @type {import('assets/JS/swiper.js')} */

const swiper = new Swiper('#testimonies', {
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    loopAddBlankSlides: true,
    pagination: {
      el: '.pag',
    },
    breakpoints: {
      // When window width is >= 320px (mobile)
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // When window width is >= 768px (tablet)
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // When window width is >= 1024px (desktop)
      1024: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });


// const pag = document.querySelector('#testimonies .pag');

// const datas = pag.querySelectorAll('*');

// // for (let i = 0; i < datas.length; ++i) {
// //   datas.item(i).addEventListener('click', () => swiper.slideTo(i, 900))
// // }