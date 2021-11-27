
"use strict";
class GeoLocalizacion {
    constructor() {
        this.latitud;
        this.longitud;
    
    }
    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this),this.handleLocationError.bind(this));
        } else {
            handleLocationError(false,showPosition);
        }
    }

    getMapaEstaticoGoogle(){
        var apiKey = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom ="&zoom=15";
        var tamaño= "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false"; 

        this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + apiKey;
          $("section:last-of-type").html("<img src='"+this.imagenMapa+"' alt='mapa estático de google' />");
    }
    showPosition(position) {
        this.latitud = position.coords.latitude;
        this.longitud =position.coords.longitude; 
        var info = "<p>LATITUD: "+position.coords.latitude+"</p>";
        info += "<p>LONGITUD: "+position.coords.longitude+"</p>";
        info+="<p>PRECISION: "+position.coords.accuracy+" metros</p>";
        info+="<p>ALTITUD: "+position.coords.altitude+" metros</p>";
        info+="<p>PRECISION DE ALTITUD: "+position.coords.altitudeAccuracy+" metros</p>";
        info+="<p>RUMBO: "+position.coords.heading+" grados</p>";
        info+="<p>VELOCIDAD: "+position.coords.speed+" m/s</p>";
        $("section:first-of-type").html(info);    
    
            
    }
    
    
     handleLocationError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                $("section").html("El usuario no permite la petición de geolocalización");
                break;
            case error.POSITION_UNAVAILABLE:
                $("section").html("Información de geolocalización no disponible");
                break;
            case error.TIMEOUT:
                $("section").html("La petición de geolocalización ha caducado");
                break;
            case error.UNKNOWN_ERROR:
                $("section").html("Se ha producido un error desconocido");
                break;
    
    }
    }
}

 
var geo = new GeoLocalizacion();
