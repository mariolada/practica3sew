
"use strict";
class GeoLocalizacion {
    constructor() {
    
    }
    getLocation() {

        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
        
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
   

}




var geo = new GeoLocalizacion();

