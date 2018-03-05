import { Component,Input,EventEmitter, Output} from '@angular/core';

import { Alumno } from '../clases/Alumno';

@Component({
  selector: 'claseHija',
  templateUrl: './claseHija.component.html'
})

export class ClaseHijaComponent{
    @Input() alumno: Alumno;
    @Input('profesor') nombreProfesor: string;


    @Output() darNota = new EventEmitter<boolean>();
    @Output() cambiarNombre = new EventEmitter<String>();

    calificado = false;

    aprobado = false;
    suspendido = false;

    aprobar(aprobar: boolean) {
        this.darNota.emit(aprobar);
        this.calificado = true;
        if(aprobar) {
            this.aprobado = true;
        }else {
            this.suspendido = true;
        }
    }

    cambiarNombreEnPadre(nombre: string){
        this.cambiarNombre.emit(nombre);
    }


}


