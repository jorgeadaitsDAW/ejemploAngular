import { Pipe, PipeTransform } from '@angular/core';

import { Nota} from "../clases/Nota"

@Pipe({name: 'cambiarNota'})
export class CambiarNotaPipe implements PipeTransform {
    transform(nota: Nota, inc_dec: number): number {
        let nuevoValor = nota.valor + inc_dec;
        if(nuevoValor > 10){
            nuevoValor = 10;
        }else if(nuevoValor < 1){
            nuevoValor = 1;
        }
        return nuevoValor;
    }
}
