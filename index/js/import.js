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
  
    $('body > section.product aside nav ul li span').click(function(){
      let ol = $(this).next();
      if(!$(this).hasClass('active')){
        $(this).addClass('active');
        ol.css({'height':0});
        $(this).text("keyboard_arrow_down");
      }else{
        $(this).removeClass('active');
        if(ol.hasClass('more')){
          ol.css({'height':ol.children().length*36+'px'});
        }else{
          ol.css({'height':220+'px'});
        }
        $(this).text("keyboard_arrow_up");
      }
    });

    
    $('body > section.product aside nav ul li ol li:nth-of-type(6)').click(function(){
      let ol = $(this).parents('ol');
      let li = ol.children();
      let height
      if(!ol.hasClass('more')){
        ol.addClass('more');
        height = li.length * 36;
        ol.css({'height':height+'px'});
        console.log('필요한 높이=',height);
        $(this).css('order','1')
        $(this).text("-접기")
      }else{
        ol.css({'height':220+'px'});
        $(this).css('order','0')
        $(this).text("+더보기")
        ol.removeClass('more');
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

    // aside 영역(서브페이지 카테고리영역 높이 부여하기)
    if($('aside').length > 0){
      let aside_nav = $('aside').children('nav');
      let category = aside_nav.find('ol');
      for(let i=0; i<category.length;i++){
        let target = category[i];
        let menus = $(target).children();
        console.log(`${i}번째 자식은 ${menus.length}`)
        if(menus.length>5){
          $(target).css({'height':220+'px'});
        }
      }
    }
    
});
