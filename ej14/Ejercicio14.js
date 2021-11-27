
  var coordinates = " Lugar de Corrección: ";
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
   coordinates+=position.coords.latitude+", "+position.coords.longitude;
       
}


function dropHandler(ev) {
  console.log('Fichero(s) arrastrados');

  // Evitar el comportamiendo por defecto (Evitar que el fichero se abra/ejecute)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Usar la interfaz DataTransferItemList para acceder a el/los archivos)
    for (var i = 0; i < ev.dataTransfer.items.length; i++) {
      // Si los elementos arrastrados no son ficheros, rechazarlos
      if (ev.dataTransfer.items[i].kind === 'file') {
        var file = ev.dataTransfer.items[i].getAsFile();

      

        
    var reader = new FileReader();
    var titulo = "<h2>NOTAS GENERADAS</h2>"
    var result = "";

    reader.onload = function(progressEvent){    
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length-1; line++){
        var alumnoNota = lines[line];
        var alumno = alumnoNota.split(';')[0];
        var nota = parseFloat(alumnoNota.split(';')[1]);
        if(nota<4.5) {
          result+="<strong>"+alumno +"</strong> <em>Nota:</em> <strong>Suspenso </strong> ; "+coordinates+"\n";
        } else if(nota < 6) {
          result+="<strong>"+alumno +"</strong> <em>Nota:</em> <strong>Suficiente </strong> ; "+coordinates+"\n";
        } else if(nota < 7) {
          result+"<strong>"+alumno +"</strong> <em> Nota:</em><strong> Bien </strong> ; "+coordinates+"\n";
        } else if(nota < 8) {
          result+="<strong>"+alumno +"</strong> <em> Nota:</em> <strong>Notable - </strong> ; "+coordinates+"\n";
        } else if(nota < 9) {
          result+="<strong>"+alumno +"</strong> <em> Nota:</em> <strong>Notable + </strong> ; "+coordinates+"\n";
        } else if(nota < 10) {
          result+="<strong>"+alumno +"</strong> <em> Nota:</em> <strong>Sobresaliente</strong> ; "+coordinates+"\n";
        } else if(nota == 10) {
          result+="<strong>"+alumno +" </strong> <em>Nota:</em><strong> Matrícula de Honor</strong> ; "+coordinates+"\n";
        } else {
          result+="<strong>"+alumno +" </strong> <em>Nota:</em> <strong>Error</strong> ; "+coordinates+"\n";
        }

      }

      $("section:last-of-type").html(titulo+"<pre>"+result+"</pre>");

    };
    reader.readAsText(file);
        console.log('... file[' + i + '].name = ' + file.name);
      }
    }







  } else {
    // Usar la interfaz DataTransfer para acceder a el/los archivos
    for (var i = 0; i < ev.dataTransfer.files.length; i++) {
      console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
    }
  }

  // Pasar el evento a removeDragData para limpiar
  removeDragData(ev)
}
function dragOverHandler(ev) {
  console.log('File(s) in drop zone');

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();
}
function removeDragData(ev) {
  console.log('Removing drag data')

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to remove the drag data
    ev.dataTransfer.items.clear();
  } else {
    // Use DataTransfer interface to remove the drag data
    ev.dataTransfer.clearData();
  }
}