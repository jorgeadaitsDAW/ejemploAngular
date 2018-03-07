import { Pipe, PipeTransform } from '@angular/core';

import { Nota} from "../clases/Nota"

@Pipe(
    {
        name: 'filtrarNota',
        pure: false
    })
export class FiltroNotaPipe implements PipeTransform {
    transform(notas: Nota[],aprobadas: boolean) {
        let resultado = [];
        if(aprobadas){
            resultado = notas.filter(nota => nota.valor >= 5);
        }else{
            resultado = notas.filter(nota => nota.valor  < 5);
        }

        return resultado;
    }
}
