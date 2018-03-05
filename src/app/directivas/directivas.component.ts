import { Component } from '@angular/core';
import { Alumno,ALUMNOS } from '../clases/Alumno';



@Component({
  selector: 'directivas',
  templateUrl: './directivas.component.html'
})
export class DirectivasComponent {
    titulo = 'ESTOS SON EJEMPLOS DE DIRECTIVAS';
    estaDivActivo= true;
    posicion= 2;
    mostrarContainer = false;
    color = "";
    mostrarDiv = false;
    colorFondoBoton = 'green';

    alumnos = [
        new Alumno(1,'Pedro'),
        new Alumno(2,'Pepito'),
        new Alumno(3,'Lolita'),
        new Alumno(4,'Susanita'),
        new Alumno(5,'Juanito'),
        new Alumno(6,'Fulanito'),
        new Alumno(7,'Paquetillo'),
        new Alumno(8,'Nadie'),
    ]

    alumnos2 = ALUMNOS;

    addAlumno(nombre){
        this.alumnos.push(new Alumno(this.alumnos.length,nombre));
    }

    toogleDiv(){
        this.mostrarDiv = this.mostrarDiv?false:true;
    }

    mostrarEsteEjemplo(){
        return false;
    }
}


