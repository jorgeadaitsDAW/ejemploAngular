import { Component, OnInit } from '@angular/core';

import { ALUMNOS } from '../clases/Alumno';

@Component({
  selector: 'app-prueba-padre',
  templateUrl: './prueba-padre.component.html',
  styleUrls: ['./prueba-padre.component.css']
})
export class PruebaPadreComponent implements OnInit {

    titulo = "EJEMPLO";
    alumnos = ALUMNOS;
    profesor = "MANOLO"

  constructor() { }

  ngOnInit() {
  }





}
