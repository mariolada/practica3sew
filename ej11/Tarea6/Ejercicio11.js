
"use strict";
class App {
    constructor() {

    }


    obtenerRutaHuca() {
        var HUCA = new Object();
        HUCA.latitude = 43.3762670415201;
        HUCA.longitude = -5.82735198812612;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;

                var mymap = L.map('mapa', {
                    center: [latitude, longitude],
                    zoom: 12
                });

                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                    maxZoom: 25,
                    id: 'mapbox/streets-v11'
                }).addTo(mymap);

                L.Routing.control({
                    waypoints: [
                        L.latLng(latitude, longitude),
                        L.latLng(HUCA.latitude, HUCA.longitude)
                    ],
                    language: 'es'
                }).addTo(mymap);
            });
        }
        else {
            var mymap = L.map('mapa', {
                center: [HUCA.latitude, HUCA.longitude],
                zoom: 17
            });

            L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
                maxZoom: 25,
                id: 'mapbox/streets-v11'
            }).addTo(mymap);
        }
    }
}

var app = new App();
app.obtenerRutaHuca();