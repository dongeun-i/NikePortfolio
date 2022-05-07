$(document).ready(function(){

    var swiper = new Swiper('.swiper1',{
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 1000,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay:{
          delay :3000,
        },
        
      });

    var swiper = new Swiper('.swiper2', {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
      loop: false,
      loopFillGroupWithBlank: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
      },
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay:{
        delay :3000,
      }
    });

      // $(".swiper-slide").mouseover(function(){
      //     swiper.autoplay.stop();
      // }
      // $(".swiper-slide").mouseleave(function(){
      //     swiper.autoplay.start();
      // })

  
      $('body > section.product aside nav ul li span').click(function(){
        if(!$(this).hasClass('active')){
          $(this).addClass('active');
          $(this).text("keyboard_arrow_down");
        }else{
          $(this).removeClass('active');
          $(this).text("keyboard_arrow_up");
        }
      });

      
      $('body > section.product aside nav ul li ol li:nth-of-type(6)').click(function(){
        if(!$(this).parents('ol').hasClass('more')){
          $(this).parents('ol').addClass('more');
          $(this).css('order','1')
          $(this).text("-접기")
        }else{
          $(this).css('order','0')
          $(this).text("+더보기")
          $(this).parents('ol').removeClass('more');
        }
      })


      $('body > header div.mobileMui').click(function(){
        if(
          !$(this).hasClass('active')
        ){
          $(this).addClass('active');
          $('header nav').addClass('active');
          $('body').css('overflow','hidden');
        }else{
          $(this).removeClass('active');
          $('header nav').removeClass('active');
          $('body').css('overflow','auto');
        }
      })

      $('body > header nav ul li span.material-icons').click(function(){
        if(!$(this).hasClass('more')){
          $(this).addClass('more');
          $(this).text("keyboard_arrow_up");
        }else{
          $(this).removeClass('more');
          $(this).text("keyboard_arrow_down");
        }
      })
      $(".radioColor li").click(function(){
        var idx = $(this).index();
        $(".tab > ul").removeClass("active");
        $(".tab > ul").eq(idx).addClass("active");
      })

      $(".popup li").click(function() {
        var idx = $(this).index();
        // alert(idx)
        $(".popup_text").removeClass("on");
        $(".popup_text").eq(idx).addClass("on");
        // $(".popup_cont > div").hide();
        // $(".popup_cont > div").eq(idx).show();
      })


});