"use strict";
class LectorArchivos {
  constructor() {
  }


  calcularTamañoArchivos() {
    var nBytes = 0,
      archivos = document.getElementById("subirArchivos").files,
      nArchivos = archivos.length;
    for (var i = 0; i < nArchivos; i++) {



      var reader = new FileReader();



      if (archivos[i].type == 'application/json' || archivos[i].type == 'text/xml' || archivos[i].type == 'text/plain') {
        reader.onload = function (progressEvent) {

          $("footer").before("<textarea name = 'texto' cols = '120' rows = '50' disabled>" + this.result + "</textarea>");

        };
      }
      reader.readAsText(archivos[i]);
      $("footer").before("<h2>Nombre de archivo: " + archivos[i].name + "</h2>"
        + "<p>Tipo de archivo: " + archivos[i].type + "</p>" +
        "<p>Tamaño de archivo: " + archivos[i].size + "</p>");
      console.log(archivos[i].type);

      nBytes += archivos[i].size;



    }
  }

}
var lector = new LectorArchivos();

