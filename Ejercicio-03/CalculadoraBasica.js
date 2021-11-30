"use strict";
class Calculadora {
    constructor() {
        this.pantalla = "";
        this.memoria = 0;
    }

    digitos(numero) {
        this.pantalla += Number(numero);
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    mMenos() {
        this.memoria = eval(this.memoria + "-" + this.pantalla);
    }
    mMas() {
        this.memoria = eval(this.memoria + "+" + this.pantalla);
    }
    mrc() {
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    punto() {
        this.pantalla += '.';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    suma() {
        this.pantalla += '+';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    resta() {
        this.pantalla += '-';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    multiplicacion() {
        this.pantalla += '*';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    division() {
        this.pantalla += '/';
        document.querySelector("input[type = text]").value = this.pantalla;
    }
    borrar() {
        this.pantalla = '';
        document.querySelector("input[type = text]").value = this.pantalla;
    }

    igual() {
        try {
            this.pantalla = "" + eval(this.pantalla);
            document.querySelector("input[type = text]").value = this.pantalla;
        }
        catch (err) {
            document.querySelector("input[type = text]").value = err;
        }
    }
    eventosTeclado() {
        document.addEventListener('keydown', (event) => {
            const tecla = event.key;
            if (tecla == '0' || tecla == '1' || tecla == '2' || tecla == '3' || tecla == '4' || tecla == '5' || tecla == '6' || tecla == '7' || tecla == '8' || tecla == '9') {
                this.digitos(tecla);
            } else if (tecla == ',' || tecla == '.') {
                this.punto();
            }
            else if (tecla == 'C') {
                this.borrar();
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