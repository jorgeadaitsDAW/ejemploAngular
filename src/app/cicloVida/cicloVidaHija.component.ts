import { Component,Input,SimpleChanges} from '@angular/core';

import { Videojuego } from '../clases/Videojuego';

@Component({
  selector: 'cicloVidaHija',
  templateUrl: './cicloVidaHija.component.html'
})

export class CicloVidaHijaComponent{
    @Input() videojuego: Videojuego;
    @Input('plataforma') nombrePlataforma: string;

    pasosCicloVida: string[] =   [];
    cambios: string[] = [];

    constructor() {
        this.pasosCicloVida.push("CONSTRUCTOR:"+this.obtenerTiempo());
    }

    ngOnChanges(changes: SimpleChanges){
        this.pasosCicloVida.push('ngOnChanges:'+this.obtenerTiempo());
        for (let propName in changes) {
            let chng = changes[propName];
            let cur  = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            this.cambios.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }


    ngOnInit(){
        this.pasosCicloVida.push('ngOnInit:'+this.obtenerTiempo());
    }

    ngDoCheck(){
        this.pasosCicloVida.push('ngDoCheck:'+this.obtenerTiempo());
    }

    ngAfterContentInit(){
        this.pasosCicloVida.push('ngAfterContentInit:'+ this.obtenerTiempo());
    }

    ngAfterContentChecked(){
        this.pasosCicloVida.push('ngAfterContentChecked:'+ this.obtenerTiempo());
    }

    ngAfterViewInit(){
        this.pasosCicloVida.push('ngAfterViewInit:'+ this.obtenerTiempo());
    }

    ngAfterViewChecked(){
        this.pasosCicloVida.push('ngAfterViewChecked:'+ this.obtenerTiempo());
    }

    ngOnDestroy(){
        console.log("SE HA DESTRUIDO EL COMPONENTE HIJO");
        this.pasosCicloVida.push('ngOnDestroy:'+ this.obtenerTiempo());
    }


    obtenerTiempo(){
        let fecha = new Date();
        return fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"."+fecha.getMilliseconds();
    }


}


