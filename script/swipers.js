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

      const swiper3 = new Swiper('.mySwiper3', { 
        spaceBetween:24,
        slidesPerView: 'auto',       
        navigation: {
          nextEl: '.choose .swiper-button-next',
          prevEl: '.choose .swiper-button-prev',
        },
      
      });

      const swiper4 = new Swiper('.mySwiper4', {         
        slidesPerView: 1,       
        pagination: {
          el: '.swiper-pagination',
          clickable:true,          
          renderBullet: function (index, className) {
            let arr = ["2003", "2008", "2009", "2012", "2016", "2018", "2020" , "2022"] ;
            return '<span class="' + className + '">' + (arr[index]) + "</span>";
          },
        },
        navigation: {
          nextEl: '.history .swiper-button-next',
          prevEl: '.history .swiper-button-prev',
        },
      
      });

    