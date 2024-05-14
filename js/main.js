document.addEventListener("DOMContentLoaded", () => {

  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
     breakpoints: {
    // when window width is >= 576px
      576: {
        direction: 'vertical',
        slidesPerView: 6,
        // spaceBetween: 20
      }
    }
})


})
