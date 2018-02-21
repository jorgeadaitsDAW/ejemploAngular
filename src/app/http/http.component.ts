import { Component, OnInit } from '@angular/core';

import { Chusqr } from '../clases/Chusqr'

import { ChusqrService } from './chusqr.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
  providers: [ ChusqrService ]
})

export class HttpComponent implements OnInit {

  chusqrs : Chusqr[];

  constructor(private chusqrService: ChusqrService) {

  }

  ngOnInit() {
     this.chusqrService.getChusqrs()
      .subscribe(chusqrs => this.chusqrs = chusqrs);
  }

}
