import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Chusqr } from '../clases/Chusqr'

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ChusqrService {

    constructor(private http: HttpClient) {}

    getChusqrs (): Observable<Chusqr[]>	{
        return this.http.get<Chusqr[]>('http://chusqr.es/getChusqers');
    }

}
