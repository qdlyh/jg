/* 自定义查看高德地图 */

$('.keywords-map').click(function () {
    var address = $(this).parents('.keywords-content-box').find('.address').text();
    $.ajax({
        url: 'http://restapi.amap.com/v3/geocode/geo?key=9271212387ddfb2c902a74519ea0eb06&plugin=AMap.Autocomplete,AMap.PlaceSearch&address=' + address + '&city=',
        success: function (res) {
            console.log(res)
            var Gdaddress = res.geocodes[0].location;
            /* 高德 */
            var marker, map = new AMap.Map("container", {
                resizeEnable: true,
                center: [Gdaddress.split(',')[0], Gdaddress.split(',')[1]],
                zoom: 17
            });
            // 实例化点标记
            function addMarker() {
                marker = new AMap.Marker({
                    icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
                    position: [Gdaddress.split(',')[0], Gdaddress.split(',')[1]]
                });
                marker.setMap(map);
            }
            addMarker();
        }
    });
    $('#mapbox').hide();
    $('#container').show();
    $('#myPageTop').show();
})


/* 获取关键件存储 */
$('.go-list').click(function () {
    var address = $(this).parents('.keywords-content-box').find('.address').text();
    $.ajax({
        url: 'http://restapi.amap.com/v3/geocode/geo?key=9271212387ddfb2c902a74519ea0eb06&plugin=AMap.Autocomplete,AMap.PlaceSearch&address=' + address + '&city=',
        success: function (res) {
            var Gdaddress = res.geocodes[0].location;
            localStorage.setItem('address', Gdaddress)
            window.location.href = "seekList.html"
        }
    });
})

$('#myPageTop').click(function () {
    $('#container').hide();
    $('#myPageTop').hide();
    $('#mapbox').show();
})