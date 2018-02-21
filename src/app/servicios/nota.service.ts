import { Injectable } from '@angular/core';
import { NOTAS } from '../clases/Nota';

@Injectable()
export class NotaService {

  	constructor() { }

 	getNotas(){
 		return NOTAS.filter(nota => nota.valor >= 5);	
 	}

}
