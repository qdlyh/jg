/* 轮播切换 */
var mySwiper = new Swiper('.mySwiper', {
    autoplay: 4000, //可选选项，自动滑动
    paginationClickable: true,
    lazyLoading: true,
    lazyLoadingInPrevNext : true, 
    autoplayDisableOnInteraction : false,//防止点击左右按钮不再轮播
    pagination: '.swiper-pagination',
    prevButton: '.swiper-button-prev',
    nextButton: '.swiper-button-next',
})
