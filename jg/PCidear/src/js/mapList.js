/* 自定义查看高德地图 */
if (localStorage.getItem('address') != null) {
    var Gdaddress = localStorage.getItem('address');
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
    addMarker()
}