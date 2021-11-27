
"use strict";
class GeoLocalizacion {
    constructor() {
    
    }
    getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition.bind(this),this.handleLocationError.bind(this));
        } else {
            handleLocationError(false,showPosition);
        }
    }

    showPosition(position) {
        var info = "<p>LATITUD: "+position.coords.latitude+"</p>";
        info += "<p>LONGITUD: "+position.coords.longitude+"</p>";
        info+="<p>PRECISION: "+position.coords.accuracy+" metros</p>";
        info+="<p>ALTITUD: "+position.coords.altitude+" metros</p>";
        info+="<p>PRECISION DE ALTITUD: "+position.coords.altitudeAccuracy+" metros</p>";
        info+="<p>RUMBO: "+position.coords.heading+" grados</p>";
        info+="<p>VELOCIDAD: "+position.coords.speed+" m/s</p>";
        $("section").html(info);    
    
            
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

