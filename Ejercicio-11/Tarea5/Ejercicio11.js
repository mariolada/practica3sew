"use strict";
class MapaDin {
  constructor() {
    navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));
  }

 success(pos) {
   var crd = new Object();
    crd.lgt = pos.coords.longitude;
    crd.lat = pos.coords.latitude;
    
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWV0ZTE3IiwiYSI6ImNrd2J5c2JyeTFndDMydXFtYjMweXFpcWEifQ.0SKmdulKoTv4TGHbrJWvAg';  
var map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v9',  
    center: [crd.lgt, crd.lat],  
    zoom: 13
}); 
var marker = new mapboxgl.Marker().setLngLat([crd.lgt, crd.lat]).addTo(map);

};

 error(err) {
  console.warn('ERROR(' + err.code + '): ' + err.message);
};


}

var mapadin = new MapaDin();



