"use strict";
class CalculadoraRPNEspecifica extends CalculadoraRPN {
    constructor() {
        super();  
        this.ultimomedida = false;
    }

    digitos(numero) {
        super.digitos(numero);
        
    }
    enter(){
       super.enter();
       
    

    }

    punto() {
        this.current+='.';
        this.pantalla +='.';
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    suma() {
      super.suma();

    }
    resta() {
        super.resta();
    }
    multiplicacion() {
        super.multiplicacion();
    }
    division() {
        super.division();
    }
    borrar() {
        this.pantalla = '';
        this.current = '';
        this.pila = new Array();   
        this.ultimomedida = false;
        document.querySelector("textarea:first-of-type").value = this.pantalla;
    }
    sin() {
       super.sin();
    }
    
    cos() {
       super.cos();
    }

    
    tan() {
        super.tan();
    }
    aSin() {
        super.aSin();
    }
    
    aCos() {
        super.aCos();
    }

    
    aTan() {
        super.aTan();
    }


    /*inch*/
    pulgada() {
       
        if(!this.ultimomedida) {
            this.pila.push('i');
            this.pantalla+=' pulgadas\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        } else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='mt') {
                var metros = this.pila.pop();
                var pulgadas = 39.3701*metros;
                this.pantalla+=pulgadas+' pulgadas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='ft') {
                var metros = this.pila.pop();
                var pulgadas = 12*metros;
                this.pantalla+=pulgadas+' pulgadas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='mi') {
                var metros = this.pila.pop();
                var pulgadas = 63360*metros;
                this.pantalla+=pulgadas+' pulgadas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='y') {
                var metros = this.pila.pop();
                var pulgadas = 36*metros;
                this.pantalla+=pulgadas+' pulgadas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='i') {
                var metros = this.pila.pop();
                var pulgadas = metros;
                this.pantalla+=pulgadas+' pulgadas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
        }
        

    }
    /*foot*/
    pie() {
        if(!this.ultimomedida) {
            this.pila.push('ft');
            this.pantalla+=' pies\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        }else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='mt') {
                var metros = this.pila.pop();
                var pulgadas = 2.28*metros;
                this.pantalla+=pulgadas+' pies\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='i') {
                var metros = this.pila.pop();
                var pulgadas = 0.08333*metros;
                this.pantalla+=pulgadas+' pies\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='mi') {
                var metros = this.pila.pop();
                var pulgadas = 5280*metros;
                this.pantalla+=pulgadas+' pies\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='y') {
                var metros = this.pila.pop();
                var pulgadas =3*metros;
                this.pantalla+=pulgadas+' pies\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            if(ultimamedida=='ft') {
                var metros = this.pila.pop();
                var pulgadas = metros;
                this.pantalla+=pulgadas+' pies\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }

    }
}
      /*y*/
    yarda() {
        if(!this.ultimomedida) {
            this.pila.push('y');
            this.pantalla+=' yardas\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        }
        else {
            var ultimamedida = this.pila.pop();
               if(ultimamedida=='mt') {
                var metros = this.pila.pop();
                var pulgadas = 1.09361*metros;
                this.pantalla+=pulgadas+' yardas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='i') {
                var metros = this.pila.pop();
                var pulgadas = 0.0277*metros;
                this.pantalla+=pulgadas+' yardas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='ft') {
                var metros = this.pila.pop();
                var pulgadas = 0.3333*metros;
                this.pantalla+=pulgadas+' yardas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='mi') {
                var metros = this.pila.pop();
                var pulgadas = 1760*metros;
                this.pantalla+=pulgadas+' yardas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='y') {
                var metros = this.pila.pop();
                var pulgadas = metros;
                this.pantalla+=pulgadas+' yardas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }



    }
}
      /*m*/
    milla() {
        if(!this.ultimomedida) {
            this.pila.push('mi');
            this.pantalla+=' millas\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        }
        else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='mt') {
                var metros = this.pila.pop();
                var pulgadas = 0.000621371*metros;
                this.pantalla+=pulgadas+' millas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='mi') {
                var metros = this.pila.pop();
                var pulgadas = metros;
                this.pantalla+=pulgadas+' millas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='y') {
                var metros = this.pila.pop();
                var pulgadas = 0.00056818164239999991*metros;
                this.pantalla+=pulgadas+' millas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='ft') {
                var metros = this.pila.pop();
                var pulgadas = 0.000189394*metros;
                this.pantalla+=pulgadas+' millas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='i') {
                var metros = this.pila.pop();
                var pulgadas =1.5783e-5*metros;
                this.pantalla+=pulgadas+' millas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            

    }
}

    
      /*l*/
    libra() {
        if(!this.ultimomedida) {
            this.pila.push('lb');
            this.pantalla+=' libras\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        }
        else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='lb') {
                var libras = this.pila.pop();
                var cambio = libras;
                this.pantalla+=cambio+' libras\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='kg') {
                var libras = this.pila.pop();
                var cambio = 2.20462*libras;
                this.pantalla+=cambio+' libras\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='oz') {
                var libras = this.pila.pop();
                var cambio = 0.0625*libras;
                this.pantalla+=cambio+' libras\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }


    }


    }
      /*o*/
    onza() {
        if(!this.ultimomedida) {
            this.pila.push('oz');
            this.pantalla+=' onzas\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        } else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='oz') {
                var libras = this.pila.pop();
                var cambio = libras;
                this.pantalla+=cambio+' onzas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='lb') {
                var libras = this.pila.pop();
                var cambio = 16*libras;
                this.pantalla+=cambio+' onzas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='kg') {
                var libras = this.pila.pop();
                var cambio = 35.274*libras;
                this.pantalla+=cambio+' onzas\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }



    }


    }

        /*o*/
    metro() {
        if(!this.ultimomedida) {
            this.pila.push('mt');
            this.pantalla+=' metros\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        }
        else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='mt') {
                var metros = this.pila.pop();
                var pulgadas = metros;
                this.pantalla+=pulgadas+' metros\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='y') {
                var metros = this.pila.pop();
                var pulgadas = 0.9144*metros;
                this.pantalla+=pulgadas+' metros\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='ft') {
                var metros = this.pila.pop();
                var pulgadas = 0.3048*metros;
                this.pantalla+=pulgadas+' metros\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='i') {
                var metros = this.pila.pop();
                var pulgadas = 0.0254*metros;
                this.pantalla+=pulgadas+' metros\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }
            else  if(ultimamedida=='mi') {
                var metros = this.pila.pop();
                var pulgadas = 1609.34*metros;
                this.pantalla+=pulgadas+' metros\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(pulgadas);
                this.ultimomedida=false;
            }

    }


    }

        /*o*/
    kg() {
        if(!this.ultimomedida) {
            this.pila.push('kg');
            this.pantalla+=' kilogramos\n';
            document.querySelector("textarea:first-of-type").value = this.pantalla;
            this.ultimomedida=true;
        } else {
            var ultimamedida = this.pila.pop();
            if(ultimamedida=='kg') {
                var libras = this.pila.pop();
                var cambio = libras;
                this.pantalla+=cambio+' kilogramos\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
            else if(ultimamedida=='lb') {
                var libras = this.pila.pop();
                var cambio = 0.453592*libras;
                this.pantalla+=cambio+' kilogramos\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }
           else if(ultimamedida=='oz') {
                var libras = this.pila.pop();
                var cambio = 0.0283495*libras;
                this.pantalla+=cambio+' kilogramos\n';
                document.querySelector("textarea:first-of-type").value = this.pantalla;
                this.pila.push(cambio);
                this.ultimomedida=false;
            }


    }


    }
    eventosTeclado() {
      super.eventosTeclado();
    }


  
}
var calculadora = new CalculadoraRPNEspecifica();
calculadora.eventosTeclado();