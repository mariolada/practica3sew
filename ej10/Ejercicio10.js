
"use strict";
class InfoEnergia {
    constructor() {

        this.date = Date.now();
        this.url = "https://apidatos.ree.es/en/datos/demanda/ire-general?start_date=2020-01-01T00:00&end_date=2020-12-31T23:59&time_trunc=month&geo_trunc=electric_system&geo_limit=peninsular&geo_ids=8741";
    }
    cargarDatos() {
        console.log(Date.now());
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                $("pre").text(JSON.stringify(datos, null, 2));
                //Presentación de los datos contenidos en JSON

                var stringDatos = "<h2>"+datos.data.attributes.description + "</h2>";

                for (let j = 0; j < datos.included.length; j++) {
                    stringDatos += "<h3>" + datos.included[j].type + "</h3>";
                    stringDatos += "<ul>";

                    for (let i = 0; i < datos.included[j].attributes.values.length; i++) {
                        var current = datos.included[j].attributes.values[i];
                        stringDatos += "<li>Valor: " + current.value + " ; Porcentaje: " + current.percentage + " ; Fecha: " + current.datetime + "</li>";
                    }
                    stringDatos += "</ul>";
                }
                $("section").html(stringDatos);
            },
            error: function () {
                $("h3").html("Error al obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
            }
        });
    }
    createHTMLElement(tipoElemento, texto, insertarAntesDe) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verJSON() {


        this.cargarDatos();

    }
}
var infoEnergia = new InfoEnergia();
