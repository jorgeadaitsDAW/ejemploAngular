import { Component,Input} from '@angular/core';

@Component({
  selector: 'nombreAlumno',
  templateUrl: './nombreAlumno.component.html'
})
export class NombreAlumnoComponent{
    private _nombre = '';

    @Input()
    set nombre(nombre: string) {
        this._nombre = (nombre && nombre.trim() && nombre.toLowerCase() ) || 'Sin nombre';
    }

    get nombre(): string { return this._nombre; }


}


