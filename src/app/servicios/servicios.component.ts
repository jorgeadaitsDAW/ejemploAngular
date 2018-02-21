import { Component, OnInit } from '@angular/core';
import { NotaService } from './nota.service';

import { Nota,NOTAS } from '../clases/Nota'


@Component({
  providers: [ NotaService ],
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  
  notas: Nota[];

  constructor(notaService: NotaService) {
	this.notas = notaService.getNotas();
  }

  ngOnInit() {
  }

}
