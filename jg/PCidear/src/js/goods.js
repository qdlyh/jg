/* 轮播切换 */
var mySwiper = new Swiper('.mySwiper', {
    autoplay: 4000, //可选选项，自动滑动
    paginationClickable: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    autoplayDisableOnInteraction: false, //防止点击左右按钮不再轮播
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
})

//默认选中样式
$('.model-number,.model-type').find("span:eq(0)").addClass('active');
$('.model-number span,.model-type span').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
})

/* 轮播切换 */
var num = 0;
$('.smallpic li').click(function () {
    num = $(this).index();
    //console.log(num)
    $('.bigpic').attr('src', $(this).find('img').attr('src'));
    $(this).addClass('smallpic-active').siblings().removeClass('smallpic-active');
});


$('.right-btn').click(function () {
    var li = $('.smallpic li');
    var liWidth = $('.smallpic li').width();
    num++;
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

/* input数量减 */
$('.subtract-btn').click(function () {
    var inputVal = $(this).parents('.goods-count').find('.goods-input'); //input
    var goodsCount = inputVal.val(parseInt(inputVal.val()) - 1).val(); //input数量
    //console.log(goodsCount)
    if (parseInt(inputVal.val()) < 1) {
        inputVal.val(1)
    }
    if (inputVal.val() === '') {
        inputVal.val(1)
    }
})
/* input数量加 */
$('.add-btn').click(function () {
    var inputVal = $(this).parents('.goods-count').find('.goods-input'); //input
    var goodsCount = inputVal.val(parseInt(inputVal.val()) + 1).val(); //input数量
    //console.log(goodsCount)
    if (inputVal.val() === '') {
        inputVal.val(1)
    }
})

/* 输入数量 */
$('.goods-input').keyup(function () {
    if ($(this).val() === '' || $(this).val() > 9e+10) {
        $(this).val(1)
    }
    $(this).val($(this).val().replace(/\D|^0/g, '1'));
});
/* 失去焦点 */
$('.goods-input').blur(function () {
    if ($(this).val() === '') {
        $(this).val(1)
    }
});
/* tips */
$('.goods-cart').click(function () {
    $('.tips').stop(false).show();
    setTimeout(function () {
        $('.tips').stop(false).fadeOut();
    }, 1500)
})