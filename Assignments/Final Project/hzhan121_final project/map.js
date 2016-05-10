function init() {
	//alert("ready");
	var mapOptions = {
		center: new google.maps.LatLng(41.5378382, -88.2227332),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControl: true
	};

	var mapCanvas = document.getElementById('map-div');

	var map = new google.maps.Map(mapCanvas, mapOptions);

  var icon = {
    url: "bread.jpg", // url
    scaledSize: new google.maps.Size(50, 50), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
  };

	var marker = new google.maps.Marker({
    	map: map,
    	position: new google.maps.LatLng(41.5378382, -88.2227332),
    	icon: icon,
    	animation: google.maps.Animation.DROP,
    	title: 'Hong Bakery House'
    });

    var windowContent = '<div id="e1-info"><h1>Hong Bakery House</h1><p>898 Wildflower Dr.<br>Shorewood, IL 60404<br>Phone: 331 - 545 - 6644</p></div>';

    var infowindow = new google.maps.InfoWindow({
            content: windowContent
        });

    google.maps.event.addListener(marker, 'click', function(){
            infowindow.open(map, marker);
    });

    // Geolocation below
    function moveMap(loc){
      //console.log(loc.coords);
      map.panTo(new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude));
      map.setZoom(16);
    }

    document.getElementById('mylocation-btn').addEventListener('click', function(){
    	navigator.geolocation.getCurrentPosition(moveMap);
    });

    document.getElementById('textbox-btn').addEventListener('click', function(){
      var address = document.getElementById('address-textbox').value;
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address':address}, function(results, status){
        if (status === google.maps.GeocoderStatus.OK) {
          map.panTo(results[0].geometry.location);
          map.setZoom(16);
        } else {
          alert('Can not locate address');
        }
      });
    });


}

google.maps.event.addDomListener(window, 'load', init);





