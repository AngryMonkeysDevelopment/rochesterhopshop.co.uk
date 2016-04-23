"use strict";

var hopshop = (function() {
  function init() {
    var hsLatLng =  {lat: 51.390558, lng: 0.502940};

    var map = new google.maps.Map(document.getElementById('map'), {
      center: hsLatLng,
      zoom: 18
    });

    var marker = new google.maps.Marker({
      position: hsLatLng,
      map: map,
      title: 'The Hop Shop'
    });
  }
  return {
    init: init
  }
})();
