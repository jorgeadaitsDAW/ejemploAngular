import { Pipe, PipeTransform } from '@angular/core';
import { Nota} from "../clases/Nota";

@Pipe({
    name: 'prueba',
    pure: false
})
export class PruebaPipe implements PipeTransform {

  transform(notas: Nota[],aPartirDe: int) {
      let resultado = [];
      resultado = notas.filter(nota => nota.valor >= aPartirDe);
      return resultado;
  }

}
