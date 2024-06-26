$(document).ready(() => {
  const bannerTime = 5000  // 顶部banner图淡入淡出停留时间 (包含了淡入淡出时间) 单位毫秒
  const bannerFadeTime = 2  // 顶部banner图淡入淡出 单位秒
  
  
  $(".box-phone").click(() => {
    $(".video-box").fadeIn(500)
    setTimeout(() => {
      $(".video-wrap").find('video').trigger('play');
    }, 1000)
    $("html,body").addClass('no-scroll');
  })
  $(".swiper-wrapper").click(() => {
    $(".video-box").fadeIn(500)
    $(".video-clone").css("opacity", "0")
    setTimeout(() => {
      $(".video-wrap").find('video').trigger('play');
      $(".video-clone").css("height", $(".video-wrap video").height());
      $(".video-clone").css("opacity", "1")
    }, 1000)
    $("html,body").addClass('no-scroll');
  })
  $(".video-clone").click(() => {
    $(".video-box").fadeOut(500)
    $(".video-wrap").find('video').trigger('pause');
    $("html,body").removeClass('no-scroll');
  })
  // 正文视频点击
  isplay = false
  $(".main-video").click(() => {
    if (isplay) {
      $(".main-video video").trigger('pause');
      $(".main-video img").show()
      isplay = false
    } else {
      $(".main-video video").trigger('play');
      $(".main-video img").hide()
      isplay = true
    }
  })

  // 导航点击事件
  function rightIconClick () {
    if ($(".header-right").hasClass("header-right-on")) {
      $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
      $(".header-left-icon2").show()
      if ($(window).innerWidth() <= 1024) {
        $('html').css({'overflow-y': 'scroll'});
      }
    } else {
      $(".header-right").addClass("header-right-on")
      $(".header-phone").addClass("header-right-on")
      if ($(window).innerWidth() <= 1024) {
        $(".header-left-icon2").hide()
        $('html').css({'overflow-y': 'hidden'});
      }
    }
  }
  $(".box").click(() => {
    $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
  })
  $(".main").click(() => {
    $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
  })
  $(".footer").click(() => {
    $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
  })
  $(".copyright").click(() => {
    $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
  })
  $(".header-right-right-head").click(rightIconClick)
  $(".header-right-right-icon").click(rightIconClick)
  
  // banner淡入淡出动画
  setInterval(() => {
    const max = $('.swiper-slide').length - 1
    let index = $('.swiper-slide-on').index()
    if (max == 0) {
      return false
    }
    if (index >= max) {
      $('.swiper-slide-on').removeClass("swiper-slide-on")
      index = 0
    } else {
      index++
    }
    $('.swiper-slide-on').removeClass("swiper-slide-on")
    $('.swiper-slide').eq(index).addClass("swiper-slide-on")
  }, bannerTime)
  // 动态计算头部高度
  if ($(window).innerWidth() > 1024) {
    $('.img-box').css('height',$(window).innerWidth() * 77 / 190 + "px");
    $('.img-head').css('height',$(window).innerWidth() * 77 / 190 + "px");
    $('.swiper-wrapper').css('height',$(window).innerWidth() * 77 / 190 + "px");
    $(".video-clone").css("height", $(".video-wrap video").height());
  } else {
    $('.box-phone').css('height',$(".box-phone").innerWidth() + "px");
    $(".video-clone").css("height", "60px");
    $(".main-video video").attr("controls", "controls")
  }
  
  
  $(window).on("resize", function () {
    if ($(window).innerWidth() > 1024) {
      $('.img-box').css('height',$(window).innerWidth() * 87 / 190 + "px");
      $('.img-head').css('height',$(window).innerWidth() * 77 / 190 + "px");
      $('.swiper-wrapper').css('height',$(window).innerWidth() * 77 / 190 + "px");
      $('.main').css('marginTop',$(window).innerWidth() * 10 / 190 * -1 + "px");
    
      $(".video-clone").css("height", $(".video-wrap video").height());
    } else {
      $('.main').css('marginTop',0);
      $('.box-phone').css('height',$(".box-phone").innerWidth() + "px");
      $(".video-clone").css("height", "60px");
      $(".main-video video").attr("controls", "controls")
    }
    
  })

  $(window).on("scroll", function () {
    if ($('.main-top').css('display') != 'flex') {
      if ($(".main")[0].getBoundingClientRect().top <= 0) {
        $(".header-right-right").css("display", "flex")
        $(".header-left-icon2").fadeIn(500)
      } else {
        $(".header-right-right").fadeOut(500)
        $(".header-left-icon2").fadeOut(500)
      }
    } else {
      if ($(".main")[0].getBoundingClientRect().top <= 0) {
        $(".main").addClass("box-bg")
        $(".swiper-wrapper").hide()
      } else {
        $(".main").removeClass("box-bg")
        $(".swiper-wrapper").show()
      }
    }
  })
})