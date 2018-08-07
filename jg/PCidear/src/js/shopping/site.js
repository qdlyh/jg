  /* 城市选择默认 */
  new PCAS("user.province", "user.city", "user.area", "--请选择省份--", "--请选择城市--", "--请选择地区--");

  /* 没以保存的地址显示编辑表单 */
  if ($('.my-site-box').length !== 0) {
      //console.log($('.my-site-box').length)
      $('.compile-form').hide()
      $('.my-site').show()
  } else {
      $('.compile-form').show()
      $('.my-site').hide()
  }

  /* 默认地址 */
  function defaultSite(index) {
      var _this = $(index);
      _this.parents('.my-site-box').addClass('active').siblings().removeClass('active');
      if (_this.parents('.my-site-box').is('.active')) {
          _this.parents('.my-site-box').find('.active-color').text('默认地址')
      }

      $('.my-site-box').each(function () {
          if (!$(this).is('.active')) {
              $(this).find('.active-color').text('设为默认地址')
          }
      })
  }

  /* 修改地址 */
  function compileSite(index) {
      var _this = $(index);
      $('#form')[0].reset();
      $('.compile-form').show();
      $('.my-site').hide();
  }

  /* 删除保存的收货地址 */
  function deleteSite(index) {
      var _this = $(index);
      $(index).parents('.my-site-box').remove();
      /* 没以保存的地址显示编辑表单 */
      if ($('.my-site-box').length !== 0) {
          $('.compile-form').hide();
          $('.my-site').show();
      } else {
          $('.compile-form').show();
          $('.my-site').hide();
      }
  }

  $('.addSite').click(function () {
      $('.compile-form').show();
      $('.my-site').hide();
      $('#form')[0].reset();
  })


  /* 表单提交处 */
  $('.site-btn a').click(function () {
      /* 城市地址 */
      var getpro = document.getElementById("province").value;
      var getcity = document.getElementById("city").value;
      var getarea = document.getElementById("area").value;
      //console.log(getpro + " " + getcity + " " + getarea);

      var phone = $('.phone').val();
      var myName = $('.myName').val();
      var address = $('.address').val();
      var cityNumber = $('.city-number').val();
      var ifFalse = true;
      if (phone === '') {
          alert('手机不能为空')
          ifFalse = false;
          return false;
      } else if (!/(^1[3|5|8][0-9]{9}$)/.test(phone)) {
          alert('手机号码不正确')
          ifFalse = false;
          return false;
      }
      if (myName === '') {
          alert('收货人不能为空')
          ifFalse = false;
          return false;
      }
      if (getpro === '') {
          alert('请选择所在位置')
          ifFalse = false;
          return false;
      }
      if (address === '') {
          alert('请填写详细位置')
          ifFalse = false;
          return false;
      }
      if (cityNumber === '' || cityNumber.length < 6) {
          alert('请填写正确的邮政编码')
          ifFalse = false;
          return false;
      }
      //ifFalse = true;
      //console.log(ifFalse)

      /* 添加保存的地址 */
      if (ifFalse === true) {
          var mySite_box =
              `<div class="my-site-box">
              <div class="my-site-white">
              <ul class="my-site-text-top">
                  <li class="text-top"><span>${getpro}</span><i>(${myName})</i></li>
                  <li>${address}</li>
                  <li>${phone}</li>
              </ul>
              <ul class="my-site-text-right">
                  <li class="compile " onclick="compileSite(this)">修改</li>
                  <li class="delete-site" onclick="deleteSite(this)">删除</li>
                  <li class=" active-color right" onclick="defaultSite(this)">默认地址</li>
              </ul>
              </div>
          </div>`
          $('.my-site-content').prepend(mySite_box);
          $('.compile-form').hide();
          $('.my-site').show()
          if ($('.check').is(':checked')) {
              $('.my-site').find('.my-site-box:eq(0)').addClass('active');
          }
      }
  })