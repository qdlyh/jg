/* 轮播切换 */
var num = 0;
$('.smallpic li').click(function () {
	num = $(this).index();
	//console.log(num)
	$('.bigpic').attr('src', $(this).find('img').attr('src'));
	$(this).addClass('smallpic-active').siblings().removeClass('smallpic-active');
});


$('.right-btn').click(function () {
	var li = $('.smallpic li')
	var liWidth = $('.smallpic li').width();
	num++;
	// console.log(num)
	if (num >= li.length) {
		num = li.length-1;
	}
	$('.smallpic li').eq(num).trigger("click");
	$('.smallpic').animate({
		scrollLeft: '+=' + liWidth + 'px'
	}, 300);
})

$('.left-btn').click(function () {
	var li = $('.smallpic li');
	var liWidth = $('.smallpic li').width()
	num--;
	//console.log(num)
	if (num <= 0) {
		num = 0;
	}
	li.eq(num).trigger("click");
	$('.smallpic').animate({
		scrollLeft: '-=' + liWidth + 'px'
	}, 300);
})