import { Component } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent {
    titulo = 'EJEMPLO DE BINDING';
    tituloPrueba = 'Se va a cambiar este titulo a través de un campo';
    esInvisible = false;
    prueba = "EJEMPLO";
    colorComponente = "red";
    valorInput="ESTE ES UN VALOR DEL COMPONENTE";
    mostrarClase=true;
    esBotonEspecial=true;
    nombrePersonaje= ""
    claseEjemplo = "bg-primary "

    public persona = {id: 1, nombre: "Pepe", profesion: "Bombero"};


    cambiarTitulo(nuevoTitulo){
        this.tituloPrueba = nuevoTitulo;
    }


    toggleDiv(): void{
        this.esInvisible = this.esInvisible?false:true;
    }

    dameValor(){
        return "EJEMPLO DE DOBLE ASOCIACIÓN";
    }

    mostrarAlerta(){
        console.log("holaa");
        alert($("#prueba").val());
    }

}


