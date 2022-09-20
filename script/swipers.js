      const swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 13,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,        
        navigation: {
            nextEl: ".swiper-button-next"            
          },
        breakpoints: {            
            768: {
              slidesPerView: 5,   
              spaceBetween: 17,           
            },  

            449: {
              slidesPerView: 4,   

            },  

        }        
      });
      
      const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        height:500,
        spaceBetween: 10, 
        thumbs: {
          swiper: swiper,
        },
      });
    