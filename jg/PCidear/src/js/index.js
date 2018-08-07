var mySwiper = new Swiper('.mySwiper', {
    autoplay: 5000, //可选选项，自动滑动
    paginationClickable: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    loop: true,
    autoplayDisableOnInteraction: false, //防止点击左右按钮不再轮播
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',

})


var mySwiper2 = new Swiper('.mySwiper-2', {
    autoplay: 4000, //可选选项，自动滑动
    paginationClickable: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    loop: true,
    autoplayDisableOnInteraction: false, //防止点击左右按钮不再轮播
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
})

var mySwiper3 = new Swiper('.mySwiper-3', {
    autoplay: 4000, //可选选项，自动滑动
    paginationClickable: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    loop: true,
    autoplayDisableOnInteraction: false, //防止点击左右按钮不再轮播
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
})

/* 顶部轮播 */
// $(".mySwiper").mouseenter(function () {//滑过悬停
//     mySwiper.stopAutoplay();
// }).mouseleave(function(){//离开开启
//     mySwiper.startAutoplay();
// });


$(".mySwiper-2").mouseenter(function () { //滑过悬停
    mySwiper2.stopAutoplay();
}).mouseleave(function () { //离开开启
    mySwiper2.startAutoplay();
});

$(".mySwiper-3").mouseenter(function () { //滑过悬停
    mySwiper3.stopAutoplay();
}).mouseleave(function () { //离开开启
    mySwiper3.startAutoplay();
});

