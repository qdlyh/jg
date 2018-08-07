$('.datum-btn').click(function () {
    var myName = $('.myName').val();
    var email = $('.email').val();
    if (myName === '') {
        alert('名字不能为空');
        return false;
    }

    if (email !== '') {
        if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
            .test(email)) {
            alert('邮箱不正确');
        }
    }
})

/* 第一部验证码 */
$(".code-text").click(function () {
    var timer;
    var num = 60;
    if (!timer) {
        // 这里写请求发送短信验证码

        // 开启定时器
        $(".code-text").css('background', '#9FA0A0');
        $(".code-text").text(num + ' 内输入');
        num--;
        timer = setInterval(function () {
            $(".code-text").css('background', '#9FA0A0');
            $(".code-text").text(num + ' 内输入');
            if (num == 0) {
                clearInterval(timer); //停止定时器
                timer = false;
                num = 60;
                $(".code-text").css('background', '#00a1b2');
                $(".code-text").text('获取验证码');
            }
            num--;
        }, 1000);
    }
});

/* 第二部验证码 */
$(".code-text2").click(function () {
    var timer;
    var num = 60;
    if (!timer) {
        // 这里写请求发送短信验证码

        // 开启定时器
        $(".code-text2").css('background', '#9FA0A0');
        $(".code-text2").text(num + ' 内输入');
        num--;
        timer = setInterval(function () {
            $(".code-text2").css('background', '#9FA0A0');
            $(".code-text2").text(num + ' 内输入');
            if (num == 0) {
                clearInterval(timer); //停止定时器
                timer = false;
                num = 60;
                $(".code-text2").css('background', '#00a1b2');
                $(".code-text2").text('获取验证码');
            }
            num--;
        }, 1000);
    }
});

$('.open-box-btn1').click(function () {
    var test = $('.test-input').val();
    var ifFalse = false;
    if (test === '') {
        alert('请输入验证码');
        ifFalse = false;
        return false;
    }
    ifFalse = true;
    if (ifFalse) {
        $('.open-div1').hide();
        $('.open-div2').show();
    }
})


$('.open-box-btn2').click(function () {
    var newPhone = $('.newPhone').val();
    var test = $('.test-input2').val();
    var ifFalse = false;
    if (test === '') {
        alert('请输入验证码');
        ifFalse = false;
        return false;
    }
    if (newPhone === '') {
        alert('手机不能为空')
        ifFalse = false;
        return false;
    } else if (!/(^1[3|5|8][0-9]{9}$)/.test(newPhone)) {
        alert('手机号码不正确')
        ifFalse = false;
        return false;
    }
    ifFalse = true;
    if (ifFalse) {
        $('.open-div2').hide();
        $('.open-div3').show();
        $('.afterPhone').text(newPhone);
    }
})

$('.open-box-btn3').click(function () {
    $('.open-div3').hide();
})

$('.open-phone').click(function () {
    $('.open-div1').show();
})
$('.close-btn').click(function () {
    $('.open-div').hide();
})