"use strict";
class ModificadorHTML {
    constructor() {

    }
 ocultarParrafos()
{

    $('p').hide();
}
mostrarParrafos()
{

    $('p').show();
}
modificarH1() {
$('h1')
    .html('Este es otro <strong>titulo</strong> diferente al anterior');
}
restablecerH1() {

        $('h1')
            .html('Titulo 1');

}
insertarArticleAfterh3() {
    $("h3").after("<article><h1>El tiempo pasa</h1><p>(texto sacado de internet)Era una fría mañana, pero el saber que ella estaba a salvo y volviendo a casa me dió la fuerza para levantarme...</p></article>");
}

eliminarH2() {
    $("h2").remove();
}
rehacerH2() {
    $("h3").before("<h2>Titulo 2</h2>");
}

recorrerElementos() {
    $("*", document.body.any).each(function() {
        var padre = $(this).parent().get(0).tagName;
        $(this).prepend(document.createTextNode( "Elemento padre : <"  + padre + "> elemento : <" + $(this).get(0).tagName +"> valor: "));
        });
    }

sumarElementosTabla() {
    var nFilas = $("table tr").length;
    var nColumnas = $("table tr:last td").length;
    var sumaCF = nFilas + nColumnas;
    $("table").after("Suma de filas y tablas = "+sumaCF);
}

}




var modificador = new ModificadorHTML();