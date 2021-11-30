"use strict";
class Calculadora {
    constructor() {
        this.pantalla = "";
        this.current = "";
        this.pila = new Array();
    }

    digitos(numero) {
        this.pantalla += numero;
        this.current += numero;
        document.querySelector("textarea:first-of-type").value = this.pantalla;

    }
    enter() {
        if (this.current != '') {
            this.pila.push(parseFloat(this.current));
            this.current = '';
            this.pantalla += '\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
        }



    }

    punto() {
        this.current += '.';
        this.pantalla += '.';
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    suma() {
        var x2 = this.pila.pop();
        var x1 = this.pila.pop();
        var result = x1 + x2;
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;

    }
    resta() {
        var x2 = this.pila.pop();
        var x1 = this.pila.pop();
        var result = x1 - x2;
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    multiplicacion() {
        var x2 = this.pila.pop();
        var x1 = this.pila.pop();
        var result = x1 * x2;
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    division() {
        var x2 = this.pila.pop();
        var x1 = this.pila.pop();
        var result = x1 / x2;
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }

    sin() {
        var x1 = this.pila.pop();
        var result = Math.sin(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }

    cos() {
        var x1 = this.pila.pop();
        var result = Math.cos(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }


    tan() {
        var x1 = this.pila.pop();
        var result = Math.tan(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    aSin() {
        var x1 = this.pila.pop();
        var result = Math.asin(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }

    aCos() {
        var x1 = this.pila.pop();
        var result = Math.acos(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }


    aTan() {
        var x1 = this.pila.pop();
        var result = Math.atan(x1);
        this.pila.push(result);
        this.current = result;
        this.current = '';
        var representacionPila = '';
        for (var i = 0; i < this.pila.length; i++) {
            representacionPila += this.pila[i] + '\n';
        }
        this.pantalla = representacionPila;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }

    borrar() {
        this.pantalla = '';
        this.current = '';
        this.pila = new Array();
        this.ultimomedida = false;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    eventosTeclado() {
        document.addEventListener('keydown', (event) => {
            const tecla = event.key;
            if (tecla == '0' || tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' || tecla == '7' || tecla == '8' || tecla == '9') {
                this.digitos(tecla);
            } else if (tecla == ',' || tecla == '.') {
                this.punto();
            }
            else if (tecla == 'C' || tecla == 'c') {
                this.borrar();
            }
            else if (tecla == 'Enter') {
                this.enter();
            }
            else {
                if (tecla == '+') {
                    this.suma();
                }
                if (tecla == '/') {
                    this.division();
                }
                if (tecla == '*') {
                    this.multiplicacion();
                }
                if (tecla == 'Enter') {
                    this.igual();
                }
                if (tecla == '-') {
                    this.resta();
                }
            }
        }
        )
    }



}
var calculadora = new Calculadora();
calculadora.eventosTeclado();