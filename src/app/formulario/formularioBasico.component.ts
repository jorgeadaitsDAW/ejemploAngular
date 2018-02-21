import { Component, OnInit } from '@angular/core';

import { Usuario } from '../clases/Usuario';


@Component({
  selector: 'formularioBasico',
  templateUrl: './formularioBasico.component.html'
})

export class FormularioBasicoComponent implements OnInit {

    titulo = "Formulario Registro en la WEB";

    usuario = new Usuario("","","",0,'');

    passwordConfirm = "";

    tiposUsuarios = [
        "Alumno",
        "Profesor",
        "Director",
        "Secretario"
    ]

    constructor() { }

    ngOnInit() {
    }

    get diagnostico() { return JSON.stringify(this.usuario); }
}
