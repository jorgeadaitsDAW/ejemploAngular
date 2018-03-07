import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prueba-hijo',
  templateUrl: './prueba-hijo.component.html',
  styleUrls: ['./prueba-hijo.component.css']
})
export class PruebaHijoComponent implements OnInit {

    @Input() alumnoDeClase;
    @Input('profesorDeAlumnos') profesorDeClase;
  constructor() { }

  ngOnInit() {
  }

}
