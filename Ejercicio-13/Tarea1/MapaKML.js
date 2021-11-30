
var kmllayer = new Object();
var map;
var src = 'https://mariolada.github.io/ArchivoEj13/arbolGenealogico.kml';

function initMap() {
  map = new google.maps.Map(document.querySelector('section:first-of-type'), {
    center: new google.maps.LatLng(-5.8, 43.36),
    zoom: 2,
    mapTypeId: 'terrain'
  });

  var kmlLayer = new google.maps.KmlLayer(src, {
    suppressInfoWindows: true,
    preserveViewport: false,
    map: map
  });

  kmlLayer.addListener('click', function(event) {
    var content = event.featureData.infoWindowHtml;
    var testimonial = document.querySelector('section:last-of-type');
    testimonial.innerHTML = content;
  });
 
}
kmllayer.iniciarMapa = initMap;

