$(document).ready(function () {

	$(".back-img img").click(() => {
		$("body, html").animate({ scrollTop: 0 })
	})
	$(".back-img").css("bottom", $("footer").height() + 120 + "px")
	$(window).on("scroll", function () {
    if ($(window).innerWidth() > 1024 && $(window).scrollTop() > $(".first-box").height()) {
      $(".back-img").fadeIn(500)
    } else {
			$(".back-img").hide()
		}
  })
	function rightIconClick () {
    if ($(".header-right").hasClass("header-right-on")) {
      $(".header-right").removeClass("header-right-on")
      $(".header-phone").removeClass("header-right-on")
      $(".header-left-icon2").show()
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

	setTimeout(function () {
		$('.bricks-wrapper').css('opacity', '1')
	}, 200)
	var timeNum = $('.item-sel-on').index() - 1;
	var letterNum = $('.item-sel-on').index() - 1;
	timeChange('', $('.time-item').eq(timeNum).attr('data-year'));
	letterChange('', $('.letter-item').eq(letterNum).attr('data-l'));
	function timeChange (href, data) {
		var fw = ($('.time-item').width() -  $('.time-year').width()) / 2;
		var iw = $('.time-wrap').width() / 2 - $('.time-year').width() - fw;
		var w = iw - timeNum * $('.time-item').width() + 'px';
		if (href) {
			$('.time-first').css({
				'transition': 'all .5s ease-in-out'
			})
		}
		$('.time-first').css({
			'margin-left': w
		})
		$('.time-year').removeClass('time-year-on');
		$('.time-year').eq(timeNum).addClass('time-year-on');
		$('.time-year').eq(timeNum + 1).addClass('time-year-on');
		$('.time-line').removeClass('time-line-on').eq(timeNum).addClass('time-line-on');
		if (data) {
			$('.js-param').text(data.slice(0,4) + '-' + data.slice(4));
		}
		if (href && $('.list-title-zhan').css('display') == 'none') {
			setTimeout(function () {
				window.location.href = href + '?Y=' + data;
			}, 500)
		}
	}
	function letterChange (href, data) {
		var fw = ($('.letter-item').width() -  $('.letter-year').width()) / 2;
		var iw = $('.time-wrap').width() / 2 - $('.letter-year').width() - fw;
		var w = iw - letterNum * $('.letter-item').width() + 'px';
		if (href) {
			$('.letter-first').css({
				'transition': 'all .5s ease-in-out'
			})
		}
		$('.letter-first').css({
			'margin-left': w
		})
		$('.letter-year').removeClass('letter-year-on');
		if (!$('.letter-list').hasClass('letter-list2')) {
			$('.letter-year').eq(letterNum + 1).addClass('letter-year-on');
			$('.letter-year').eq(letterNum).addClass('letter-year-on');
			if (data) {
				$('.js-param').text(data.slice(0,1) + '-' + data.slice(1));
			}
		}
		if ($('.letter-list').hasClass('letter-list2')) {
			$('.letter-year').eq(letterNum).addClass('letter-year-on');
			if (data) {
				$('.js-param').text(data);
			}
		}
		$('.letter-line').removeClass('letter-line-on').eq(letterNum).addClass('letter-line-on');
		if (href && $('.list-title-zhan').css('display') == 'none') {
			setTimeout(function () {
				window.location.href = href + '?L=' + data;
			}, 500)
		}
	}
	$('.time-line').click(function () {
		var parent = $(this).parent();
		timeNum = parent.index() - 1;
		timeChange(parent.attr('data-href'), parent.attr('data-year'));
	})
	$('.letter-line').click(function () {
		if (!$('.letter-list').hasClass('letter-list2')) {
			var parent = $(this).parent();
			letterNum = parent.index() - 1;
			letterChange(parent.attr('data-href'), parent.attr('data-l'));
		}
	})
	$('.letter-year').click(function () {
		var parent = $(this).parent();
		letterNum = parent.index() - 1;
		letterChange(parent.attr('data-href'), parent.attr('data-l'));
	})
	$(window).resize(function () {
		timeChange();
		letterChange();
	})

	var startTimeX = 0;
	var startLetterX = 0;
	var timestart;
	var timeent;
	$('.time-list').mousedown(function(e) {
	    var positionDiv = $(this).offset();
	    var distenceX = e.pageX - positionDiv.left;

	    $(document).mousemove(function(e) {
	        var x = e.pageX - distenceX;
	    });

	    $(document).mouseup(function() {
	        $(document).off('mousemove');
	    });
	});
	$(".time-list").on("touchstart", function(e) {
		startTimeX = e.originalEvent.changedTouches[0].pageX;
		$('.time-first').css({
			'transition': 'none'
		})
		timestart = window.performance.now();
	})
	$(".time-list").on("touchmove", function(e) {
		var moveX = e.originalEvent.changedTouches[0].pageX - startTimeX;
		var fw = ($('.time-item').width() -  $('.time-year').width()) / 2;
		var iw = $('.time-wrap').width() / 2 - $('.time-year').width() - fw;
		var w = iw - timeNum * $('.time-item').width() + moveX + 'px';
		$('.time-first').css({
			'margin-left': w
		})
	})
	$(".time-list").on("touchend", function(e) {
		var endX = e.originalEvent.changedTouches[0].pageX - startTimeX;
		if (endX < 0 && endX < -30) {
			var num = Math.ceil(Math.abs(endX / $('.time-item').width()));
			timeNum += num;
			if (timeNum >= $('.time-item').length - 1) {
				timeNum = $('.time-item').length -2;
			}
		}
		if (endX > 0 && endX >= $('.time-item').width() / 2) {
			var num = Math.ceil(endX / $('.time-item').width());
			timeNum -= num;
			if (timeNum < 0) {
				timeNum = 0;
			}
		}
		$('.time-first').css({
			'transition': 'all .5s ease-in-out'
		})
		timeend = window.performance.now();
		// 如果触摸时间小于200毫秒 默认为点击事件 不触发touch
		if (timeend - timestart > 200) {
			var parent = $('.time-item').eq(timeNum);
			timeChange(parent.attr('data-href'), parent.attr('data-year'));
		}
	})

	$('.letter-list').mousedown(function(e) {
	    var positionDiv = $(this).offset();
	    var distenceX = e.pageX - positionDiv.left;

	    $(document).mousemove(function(e) {
	        var x = e.pageX - distenceX;
	    });

	    $(document).mouseup(function() {
	        $(document).off('mousemove');
	    });
	});
	$(".letter-list").on("touchstart", function(e) {
		startLetterX = e.originalEvent.changedTouches[0].pageX;
		$('.letter-first').css({
			'transition': 'none'
		})
		timestart = window.performance.now();
	})
	$(".letter-list").on("touchmove", function(e) {
		var moveX = e.originalEvent.changedTouches[0].pageX - startLetterX;
		var fw = ($('.letter-item').width() -  $('.letter-year').width()) / 2;
		var iw = $('.time-wrap').width() / 2 - $('.letter-year').width() - fw;
		var w = iw - letterNum * $('.letter-item').width() + moveX + 'px';
		$('.letter-first').css({
			'margin-left': w
		})
	})
	$(".letter-list").on("touchend", function(e) {
		var endX = e.originalEvent.changedTouches[0].pageX - startLetterX;
		if (endX < 0 && endX < -30) {
			var num = Math.ceil(Math.abs(endX / $('.letter-item').width()));
			letterNum += num;
			if (letterNum >= $('.letter-item').length - 1) {
				letterNum = $('.letter-item').length -2;
			}
		}
		if (endX > 0 && endX >= $('.letter-item').width() / 2) {
			var num = Math.ceil(endX / $('.letter-item').width());
			letterNum -= num;
			if (letterNum < 0) {
				letterNum = 0;
			}
		}
		$('.letter-first').css({
			'transition': 'all .5s ease-in-out'
		})
		timeend = window.performance.now();
		// 如果触摸时间小于200毫秒 默认为点击事件 不触发touch
		if (timeend - timestart > 200) {
			var parent = $('.letter-item').eq(letterNum);
			letterChange(parent.attr('data-href'), parent.attr('data-l'));
		}
	})
	$('.js-jump').click(function () {
		var parent1 = $('.time-item').eq(timeNum);
		var parent2 = $('.letter-item').eq(letterNum);
		if (parent1.length > 0) {
			window.location.href = parent1.attr('data-href') + '?Y=' + parent1.attr('data-year');
		}
		if (parent2.length > 0) {
			window.location.href = parent2.attr('data-href') + '?L=' + parent2.attr('data-l');
		}
	})











	$('.header-menu').click(function () {
		if (!$('.header-menu').hasClass('header-menu-close')) {
			$('.header-menu').addClass('header-menu-close');
			$('.header-wrap').fadeIn(300);
			$('html').css({'overflow-y': 'hidden'});
		} else {
			$('.header-menu').removeClass('header-menu-close');
			$('.header-wrap').fadeOut(300);
			$('html').css({'overflow-y': 'scroll'});
		}
	})

	$('.header-left-new .search-select-list li').click(function () {
		var _this = this;
		var text = $(this).text();
		var textOn = $('.header-left-new .search-select-on').text();
		$('.header-left-new .search-select-on').text(text);
		$(this).text(textOn);
		$('.header-left-new .search-select-list').fadeOut(300);
	})
	$('.flex-7 .search-select-list li').click(function () {
		var _this = this;
		var text = $(this).text();
		var textOn = $('.flex-7 .search-select-on').text();
		$('.flex-7 .search-select-on').text(text);
		$(this).text(textOn);
		$('.flex-7 .search-select-list').fadeOut(300);
	})
	$('.search-select').hover(() => {
		$('.search-select-list').fadeIn(300);
	}, () => {
		$('.search-select-list').fadeOut(300);
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