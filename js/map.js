var map;

function initialize() {
    var myLatlng = new google.maps.LatLng(46.1316215, 9.5700547);
    var mapOptions = {
        scrollwheel: false,
        zoom: 15,
        center: myLatlng
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var icon = {
    url: "../img/logo.jpg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(50, 50) // anchor
};
    
    var beachMarker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });

}

google.maps.event.addDomListener(window, 'load', initialize);