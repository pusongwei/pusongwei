$(document).ready(() => {

  let first = true;
  if ($('.img-list-wrap').css('display') == 'flex') {
    $('html').css({'overflow-y': 'hidden'});
  } else {
    first = false
    $('html').css({'overflow-y': 'scroll'});
  }
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
  $('.pop-up-close').click(function () {
		$('html').css('overflow-y', 'scroll');
		$('.pop-up-wrap').fadeOut(500);
	})
	$('.pop-up-1').click(function () {
		$('html').css('overflow-y', 'hidden');
		$('.pop-up-wrap-1').fadeIn(500);
	})
  $('.pop-up-2').click(function () {
		$('html').css('overflow-y', 'hidden');
		$('.pop-up-wrap-2').fadeIn(500);
	})
  $('.pop-up-3').click(function () {
		$('html').css('overflow-y', 'hidden');
		$('.pop-up-wrap-3').fadeIn(500);
	})
  $('.pop-up-4').click(function () {
		$('html').css('overflow-y', 'hidden');
		$('.pop-up-wrap-4').fadeIn(500);
	})
  $('.pop-up-5').click(function () {
		$('html').css('overflow-y', 'hidden');
		$('.pop-up-wrap-5').fadeIn(500);
	})

  let maxL = 0
  if ($('.img-list-wrap').css('display') == 'flex') {
    getMaxLeft()
  }
  function getMaxLeft () {
    let maxW = 0
    $(".img-list-item").map((i, item) => {
      maxW += $(item).width() + 160
    })
    maxL = maxW - ($(window).width() / 2) - $(".second-left-con").width() + $(".right-box").width()
    $(".js-first-item").css({
      "marginLeft": 0 - maxL + "px"
    })
  }
  let zhanweiH
  getMaxL();
  function getMaxL () {
		zhanweiH = 0;
		if ($('.img-list-wrap').css('display') == 'flex') {
			$('.img-list-item').map(function (i, item) {
				zhanweiH+= $(item).width() + 160;
			})
			// 2230
			zhanweiH = zhanweiH - ($('.list_wrap').width() / 2) - ($('.img-list-item').eq($('.img-list-item').length - 1).width() / 2 + 80) - 160;
			$('.zhanwei').height(zhanweiH);
		}
	}
 
 

  
  // 导航点击事件
  function rightIconClick () {
    if ($(".header-right").hasClass("header-right-on")) {
      $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
      if ($(window).innerWidth() <= 1024) {
        $(".header-left-icon2").show()
      }
    } else {
      $(".header-right").addClass("header-right-on")
      $(".header-phone").addClass("header-right-on")
      if ($(window).innerWidth() <= 1024) {
        $(".header-left-icon2").hide()
      }
    }
  }
  $(".box").click(() => {
    $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
  })
  $(".header-right-right-head").click(rightIconClick)
  $(".header-right-right-icon").click(rightIconClick)
  
 
  
  $(window).resize(function () {
		getMaxLeft()
	})
  let right = parseFloat($(".first-right-bg").css("right"))
  window.onmousewheel = function (e) {
    if ($('.img-list-wrap').css('display') == 'flex') {
      if (e.deltaY > 0 && first) {
        $(".js-first-item").addClass("js-first-item-animation")
        $(".second-left").css("transform", "translateX(0)")
        $(".second-img-list").css("transform", "translateX(0)")
        $(".first-right-box").css("right", "-80px")
        $(".first-right-bg").css("right", right - 80 + "px")
        $(".header").fadeIn(500)
        $(".first-right-back").fadeIn(500)
        setTimeout(() => {
          $('html').css('overflow-y', 'scroll');
          first = false
        }, 1000)
      }
      if (e.deltaY < 0 && $(window).scrollTop() == 0) {
        setTimeout(() => {
          $('html').css('overflow-y', 'hidden');
          $(window).scrollTop(0)
        }, 1000)
        backOne()
      }
    }
    
  }
  function backOne () {
    first = true
      $(".js-first-item").removeClass("js-first-item-animation")
      $(".second-left").css("transform", "translateX(-600px)")
      $(".second-img-list").css("transform", "translateX(-100%)")
      $(".first-right-box").css("right", "0")
      $(".first-right-bg").css("right", right + "px")
      $(".header").fadeOut(500)
      $(".first-right-back").fadeOut(500)
      $(window).scrollTop(0)
      $('html').css('overflow-y', 'hidden');
  }
  $(".first-right-back").click(() => {
    first = true
    if ($('.js-first-item').css('margin-left') != 0-maxL + 'px') {
      $('.js-first-item').css('margin-left',0-maxL + 'px');
      setTimeout(() => {
        backOne()
      }, 700)
    } else {
      backOne()
    }
    
  })
  $(window).on("scroll", function () {
    if (first) return false
    if ($('.img-list-wrap').css('display') != 'flex') {
      if ($(".second-left")[0].getBoundingClientRect().top <= 0) {
        $(".header-right-right").css("display", "flex")
        $(".header-left-icon2").fadeIn(500)
      } else {
        $(".header-right-right").fadeOut(500)
        $(".header-left-icon2").fadeOut(500)
      }
    } else {
      setListLeft()
    }
  })
  function setListLeft () {
    let left1 = $(window).scrollTop() - maxL
		$('.js-first-item').css('margin-left',left1 + 'px');
	}

  var viewer = '';
  $('.img-list-item').click(function () {
    $(".list_item_title1").html($(this).find(".img-list-title1").html())
    $(".list_item_title2").html($(this).find(".img-list-title2").html())
    if ($(this).attr('data-type') == 'enlarge') {
      $('#image-container').show();
      $('.deg360').hide();
      $('.video-container').hide();
      
      var small = $(this).attr('data-small');
      var big = $(this).attr('data-big');
      $('.enlarge-img').attr('src', big);
      $('.enlarge-img').attr('data-small', small);
      $('.wrap-enlarge').fadeIn(500);
    }
    if ($(this).attr('data-type') == 'video') {
      $('#image-container').hide();
      $('.deg360').hide();
      $('.video-container').show();
      $('.wrap-enlarge').fadeIn(500);
      var src = $(this).attr('data-video-src');
      var video = `<video controls><source src="${src}" type=""></video>`;
      $('.video-container').html(video);
      setTimeout(function () {
        $('.video-container video').get(0).play();
      }, 500)
    }
    if ($(this).attr('data-type') =='360deg') {
      $('#image-container').hide();
      $('.video-container').hide();
      $('.deg360').show();
      $('.wrap-enlarge').fadeIn(500);
      var str = "<div class='cloudimage-360' data-folder='"+$(this).attr('data-folder')+"' data-filename='{index}.jpg' data-amount='72' data-spin-reverse='true'index-zero-base='1'></div>";
      if ($('.img-list-wrap').css('display') == 'flex') {
        var img = new Image();
        img.src = $(this).attr('data-folder') + '1.jpg';
        img.onload = function () {
          console.log(img.width/img.height*$('.deg360').height())
          $('.deg360').width(img.width/img.height*$('.deg360').height());
          $('.deg360').append(str);
          setTimeout(function () {
            window.CI360.init();
          })
        };
      } else {
        $('.deg360').append(str);
        setTimeout(function () {
          window.CI360.init();
        })
      }
    }
    $('html').css({'overflow-y': 'hidden'});
	})

  $('.wrap-enlarge-close').click(function () {
    if (viewer) {
			viewer = viewer.destroy();
		}
		$('.wrap-enlarge').fadeOut(500);
		if ($('.video-container video').get(0)) {
			$('.video-container video').get(0).pause();
		}
		$('html').css({'overflow-y': 'scroll'});
		setTimeout(function () {
			$('.home_video').html('');
			// window.CI360.destroy();
			$('.deg360').html('');
		}, 500)
	})

  $('.enlarge-img').click(function () {
		// console.log(scrollTop1);
		// scrollTop1 = $(window).scrollTop();
		// $(window).scrollTop(0);
		var isShow = true;
		if ($(window).width() < 1000) {
			isShow = false;
		}
		const container = document.querySelector('#image-container');
		viewer = new ImageViewer(container, {
			snapView: isShow
		}); 
		var src1 = $('.enlarge-img').attr('src');
		var src2 = $('.enlarge-img').attr('data-small');
		viewer.load(src2, src1);
	})
  // 微信分享
	$(document).on('click', '.weixin', function () {
		$('.weixin-img').empty();
		$('.weixin-f').css('display', 'flex');
		var qrcode = new QRCode(document.getElementById("qrcode"), {
			width : 100,
			height : 100
		});
		qrcode.makeCode($(this).attr('data-fenxiang'));
	})
	$(document).on('click', '.weixin-mask', function () {
		$('.weixin-f').css('display', 'none');
	})
})