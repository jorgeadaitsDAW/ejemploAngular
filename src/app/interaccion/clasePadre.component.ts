import { Component,Input} from '@angular/core';

import { ALUMNOS } from '../clases/Alumno'

@Component({
  selector: 'clasePadre',
  templateUrl: './clasePadre.component.html'
})
export class ClasePadreComponent{
    titulo = "EJEMPLO DE INTERACCION ENTRE COMPONENTES"
    alumnosClase = ALUMNOS;
    profesor = "JORGE"

    alumnosAprobados = 0;
    alumnosSuspendidos = 0;

    nombreEjercicio = "ESTE ES EL NOMBRE DEL EJERCICIO";


    calcularAprobados(aprobado: boolean) {
        aprobado ? this.alumnosAprobados++ : this.alumnosSuspendidos++;
    }

}


