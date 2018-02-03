import { Component,Pipe,PipeTransform } from '@angular/core';

import { Nota, NOTAS } from "../clases/Nota"

@Component({
  selector: 'pipe',
  templateUrl: './pipe.component.html'
})

export class PipeComponent {
    titulo = 'ejemplo de pipe';
    texto = 'manolo tiene un tambor';
    notas = NOTAS;
    inc_dec = 2;

    addNota(asignatura,valor){
        this.notas.push(new Nota(this.notas.length,asignatura,valor));
    }
}


