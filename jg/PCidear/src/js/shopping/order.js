/* 没以保存的地址显示编辑表单 */
if ($('.cart-container').length === 0) {
    $('.goods-text').hide()
    $('.cart-text').show()
} else {
    $('.goods-text').show()
    $('.cart-text').hide()
}

// $('.go-tab li').hover(function () {
//     $(this).addClass('active').siblings().removeClass('active');
// })

/* 删除保存的收货地址 */
function deleteSite(index) {
    var _this = $(index);
    $(index).parents('.cart-container').remove();
    /* 没以保存的地址显示编辑表单 */
    if ($('.cart-container').length === 0) {
        $('.goods-text').hide()
        $('.cart-text').show()
    } else {
        $('.goods-text').show()
        $('.cart-text').hide()
    }
}