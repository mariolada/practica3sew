"use strict";
class Calculadora {
    constructor() {
        this.pantalla = "";
        this.lastElement = "";
        this.memoria = 0;
        this.potencia = 0;
        this.parentesisAbierto = false;
        this.parentesisAbiertos = 0;
        this.parentesisCerrados = 0;
        this.currentFunciones = "trig";
    }

    digitos(numero) {
        if (numero == '(') {
            this.pantalla += (numero);
            this.lastElement += (numero);
            this.parentesisAbierto = true;
            this.parentesisAbiertos += 1;
        }
        else if (numero == ')') {
            this.parentesisCerrados += 1;
            this.pantalla += (numero);
            this.lastElement += (numero);
            if (this.parentesisAbiertos == this.parentesisCerrados) {
                this.parentesisAbierto = false;
            }
        } else {
            this.pantalla += Number(numero);
            this.lastElement += Number(numero);
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    hyp() {
        this.currentFunciones = "hyp";
        document.getElementById("sin").value = "sinh";
        document.getElementById("cos").value = "cosh";
        document.getElementById("tan").value = "tanh";
    }
    inv() {
        this.currentFunciones = "inv";
        document.getElementById("sin").value = "asin";
        document.getElementById("cos").value = "acos";
        document.getElementById("tan").value = "atan";
    }
    trig() {
        this.currentFunciones = "trig";
        document.getElementById("sin").value = "sin";
        document.getElementById("cos").value = "cos";
        document.getElementById("tan").value = "tan";
    }

    mMenos() {
        this.memoria = eval(this.memoria + "-" + this.pantalla);
    }
    mMas() {
        this.memoria = eval(this.memoria + "+" + this.pantalla);
    }
    mrc() {
        document.querySelector("input[type = text]").value = this.memoria;

    }
    punto() {
        this.pantalla += '.';
        this.lastElement+='.';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    suma() {
        this.pantalla += '+';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '+';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    resta() {
        this.pantalla += '-';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '-';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    multiplicacion() {
        this.pantalla += '*';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '*';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    division() {
        this.pantalla += '/';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '/';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    borrar() {
        this.pantalla = '';
        this.lastElement = '';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    sin() {
        if (this.currentFunciones == "trig") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.sin(eval(this.lastElement));
            this.lastElement= Math.sin(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.currentFunciones == "inv") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.asin(eval(this.lastElement));
            this.lastElement= Math.asin(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.current == "hyp") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.sinh(eval(this.lastElement));
            this.lastElement= Math.sinh(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        }
    }
    cos() {
        if (this.currentFunciones == "trig") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.cos(eval(this.lastElement));
            this.lastElement = Math.cos(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.currentFunciones == "inv") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.acos(eval(this.lastElement));
            this.lastElement = Math.acos(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.currentFunciones == "hyp") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.cosh(eval(this.lastElement));
            this.lastElement = Math.cosh(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        }
    }
    tan() {
        if (this.currentFunciones == "trig") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.tan(eval(this.lastElement));
            this.lastElement = Math.tan(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.currentFunciones == "inv") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.atan(eval(this.lastElement));
            this.lastElement = Math.atan(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        } else if (this.currentFunciones == "hyp") {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
            this.pantalla += Math.tanh(eval(this.lastElement));
            this.lastElement = Math.tanh(eval(this.lastElement));
            document.querySelector("input[type = text]").value = this.pantalla;
        }
    }

    pow2() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.pow(eval(this.lastElement, 2));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    powxy() {
        this.pantalla += '**';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '**';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    sqrt() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.sqrt(eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    cbrt() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.cbrt(eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }

    pow10() {

        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.pow(10, eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    log10() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.log10(eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    exp() {
        this.pantalla += 'e';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += 'erytrty';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    mod() {
        this.pantalla += '%';
        if (this.parentesisAbierto == false) {
            this.lastElement = '';
        } else {
            this.lastElement += '%';
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    abs() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.abs(eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    ln() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.pantalla += Math.log(eval(this.lastElement));
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    borrarultimo() {
        var lastChar = this.pantalla[this.pantalla.length - 1];
        if (lastChar == ')') {
            this.parentesisAbierto = true;
        }
        if (this.pantalla == '') {

        } else {
            this.pantalla = this.pantalla.substring(0, this.pantalla.length - 1);
        }
        if (!this.lastElement == '') {
            this.lastElement = this.lastElement.substring(0, this.lastElement.length - 1);
        }
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    pi() {
        this.pantalla += Math.PI;
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    factorial() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        if (Number(this.lastElement) >= 0) {
            var valor = 1;
            for (var i = 2; i <= this.lastElement; i++)
                valor = valor * i;
            this.pantalla = valor;
            document.querySelector("input[type = text]").value = this.pantalla;
        } else {
            this.pantalla = 'NO EXISTE FACTORIAL DE UN NUMERO NEGATIVO';
        }
    }

    masmenos() {
        this.pantalla = this.pantalla.substring(0, this.pantalla.length - this.lastElement.length);
        this.lastElement = "(-" + this.lastElement + ")"
        this.pantalla += this.lastElement;

        document.querySelector("input[type = text]").value = this.pantalla;
    }

    igual() {
        try {
            this.pantalla = "" + eval(this.pantalla);
            document.querySelector("input[type = text]").value = this.pantalla;
            this.lastElement = this.pantalla;

        }
        catch (err) {
            document.querySelector("input[type = text]").value = "Error = " + err;
        }
    }

    eventosTeclado() {
        document.addEventListener('keydown', (event) => {
            const tecla = event.key;
            if (tecla == '0' || tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' || tecla == '7' || tecla == '8' || tecla == '9' || tecla == '(' || tecla == ')') {
                this.digitos(tecla);
            } else if (tecla == ',' || tecla == '.') {
                this.punto();
            } else if (tecla == 'c' || tecla == 'C') {
                this.borrar();
            } else if (event.keyCode == 8) { //Intenté utilizar tecla=="Delete" pero no me funcionaba, así que opté por esta opción aunque estuviera deprecated
                this.borrarultimo();
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
                if (tecla == 'Enter' || tecla == '=') {
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