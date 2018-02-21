import { Component, OnInit } from '@angular/core';

import { Usuario } from '../clases/Usuario';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html'
})

export class FormularioComponent implements OnInit {

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
