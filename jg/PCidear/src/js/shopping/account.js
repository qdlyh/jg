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

      /* 地址滑动 */
      $('.right-btn img').click(function () {
          $('.my-site').animate({
              scrollLeft: '+=280px'
          }, 500);
      })

      $('.left-btn').click(function () {
          $('.my-site').animate({
              scrollLeft: '-=280px'
          }, 500);
      })

      /* 添加新地址 */
      $('.addSite').click(function () {
          $('#form')[0].reset();
          $('.compile-form').show();
          $('.my-site').hide();
          $('.addSite').hide();
          $('.arrows').hide();
      })

      /* 默认地址 */
      function defaultSite(index) {
          var _this = $(index);
          _this.addClass('active').siblings().removeClass('active');
      }

      /* 修改地址 */
      function compileSite(index) {
          var _this = $(index);
          $('#form')[0].reset();
          $('.compile-form').show();
          $('.my-site').hide();
          $('.addSite').hide();
          $('.arrows').hide();
      }

      $('.site-btn a').click(function () {
          /* 城市地址 */
          var getpro = $("#province").val();
          var getcity = $("#city").val();
          var getarea = $("#area").val();
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
              var addressBox = getpro + getcity + getarea;
              var mySite_box =
                  `<div class="my-site-box">
                  <div class="my-site-white">
                        <ul class="my-site-text-top">
                            <li class="text-top">
                            <span>${addressBox}</span>
                            <i>(${myName})</i>
                            </li>
                            <li>${address}</li>
                            <li>${phone}</li>
                        </ul>
                        <ul class="my-site-text-right">
                            <li class="compile " onclick="compileSite(this)">修改</li>
                        </ul>
                        </div>
                      </div>`
              $('.my-site').prepend(mySite_box);
              $('.compile-form').hide();
              $('.my-site').show();
              $('.arrows').show();
              $('.addSite').show();
          }
      })

      function setTotal() {
          var totalMoney = 0;
          var totalCount = 0;
          $('.cart-container').each(function () {
              var goodsMoney = parseInt($(this).find('.sum-money').text()); //金额
              var goodsCount = parseInt($(this).find('.payment-text').text()); //数量
              totalMoney += goodsMoney;
              totalCount += goodsCount;
          });
          $("#total").text(totalMoney.toFixed(2));
          $("#count").text(totalCount);
      }
      setTotal()