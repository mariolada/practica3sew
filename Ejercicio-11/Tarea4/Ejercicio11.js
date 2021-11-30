

"use strict";
class MapaDinamico {
    constructor() {
    
    }
crearMapa() {
mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWV0ZTE3IiwiYSI6ImNrd2J5c2JyeTFndDMydXFtYjMweXFpcWEifQ.0SKmdulKoTv4TGHbrJWvAg';  
var map = new mapboxgl.Map({ 
    container: 'map', 
    style: 'mapbox://styles/mapbox/streets-v9',  
    center: [-5.84476, 43.3603],  
    zoom: 13
}); 
var marker = new mapboxgl.Marker().setLngLat([-5.84476, 43.3603]).addTo(map);
}
}

var mapa = new MapaDinamico();
mapa.crearMapa();