import { Component,SimpleChanges } from '@angular/core';

import { Videojuego,VIDEOJUEGOS } from '../clases/Videojuego';
import { PersonajeVideojuego } from '../clases/PersonajeVideojuego';

@Component({
  selector: 'cicloVidaPadre',
  templateUrl: './cicloVidaPadre.component.html'
})

export class CicloVidaPadreComponent{
    titulo = "EJEMPLO DE CICLO DE VIDA DE UN COMPONENENTE";
    videojuegos = VIDEOJUEGOS;
    plataforma = "PS4";

    pasosCicloVida: string[] =   [];

    constructor() {
        this.pasosCicloVida.push("CONSTRUCTOR:"+ this.obtenerTiempo());
    }

    ngOnChanges(changes: SimpleChanges){
        this.pasosCicloVida.push('ngOnChanges:'+ this.obtenerTiempo());
    }


    ngOnInit(){
        this.pasosCicloVida.push('ngOnInit:'+ this.obtenerTiempo());
    }

    ngDoCheck(){
        this.pasosCicloVida.push('ngDoCheck:'+ this.obtenerTiempo());
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
        console.log("SE HA DESTRUIDO EL COMPONENTE PADRE");
        this.pasosCicloVida.push('ngOnDestroy:'+ this.obtenerTiempo());
    }

    addVideojuego(nombre){
        this.videojuegos.push(new Videojuego(this.videojuegos.length,nombre,[new PersonajeVideojuego("Prueba")]));
    }

    borrarVideojuego(){
        this.videojuegos.pop();
    }

    obtenerTiempo(){
        let fecha = new Date();
        return fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds()+"."+fecha.getMilliseconds();
    }


}