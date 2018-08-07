$(function () {
	$('.header-title').hover(function (e) {
		$(this).find('.show-ul').stop().slideToggle()
	});
	/* 显示购物车 */
	$(".header-img-right-login").click(function (e) {
		$(".header-msg2").toggle();
		e.stopPropagation();
	});
	$(document).click(function () {
		$('.header-msg2').hide()
	})
	$(".header-msg2").hover(function () {
		$(".header-msg2").show();
	}, function () {
		$(".header-msg2").hide();
	});


	/* 显示登录 */
	$(".header-img-right-login").click(function (e) {
		$(".header-msg1").toggle();
		e.stopPropagation();
	});
	$(document).click(function () {
		$('.header-msg1').hide()
	})
	$(".header-msg1").hover(function () {
		$(".header-msg1").show();
	}, function () {
		$(".header-msg1").hide();
	});

	/* 登录 */
	$("header-btn>a").click(function () {
		$(".loginwhole").show();
	});
	/* 注册 */
	$(".msg-text2").click(function () {
		$(".regwhole").show();
	});

	/* 侧边栏显示菜单 */
	// $('.nav-open-ul').click(function (e) {
	// 	$(this).find('ul').toggle()
	// 	e.stopPropagation();
	// })
	// $(document).click(function () {
	// 	$('.nav-open-ul>ul').hide()
	// })

	$('.nav-right a').hover(function () {
		$(this).find('i').show();
		$(this).find('.trigger').show()
	}, function () {
		$(this).find('i').hide();
		$(this).find('.trigger').hide()
	})

	function goTop() {
		var scrollTop = $(document).scrollTop();
		if (scrollTop > 600) {
			$('.nav-right-box').stop().show();
		} else {
			$('.nav-right-box').stop().hide();
		}
	}

	goTop()

	$(document).scroll(function () {
		goTop()
	});

	$('.nav-top-btn').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
	})

	/* 懒加载图片 */
	$("img").lazyload({
		failure_limit: 20, //提前加载
		effect: "fadeIn"
	});

})