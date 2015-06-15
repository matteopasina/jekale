
var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(46.1316215,9.5700547);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Jek & Ale'
  });
    
}

google.maps.event.addDomListener(window, 'load', initialize);