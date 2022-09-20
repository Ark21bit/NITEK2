      const swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 17,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".swiper-button-next"            
          },
      });
      
      const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10, 
        thumbs: {
          swiper: swiper,
        },
      });
    