mapboxgl.accessToken = 'pk.eyJ1IjoibWFyaWV0ZTE3IiwiYSI6ImNrd2J5c2JyeTFndDMydXFtYjMweXFpcWEifQ.0SKmdulKoTv4TGHbrJWvAg';

var geojson = JSON.parse(data);
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/light-v10',
center: [-96, 37.8],
zoom: 3
});
 
// add markers to map
for (const feature of geojson.features) {
// create a HTML element for each feature
const el = document.createElement('div');
el.className = 'marker';
 
// make a marker for each feature and add it to the map
new mapboxgl.Marker(el)
.setLngLat(feature.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
)
)
.addTo(map);
}


