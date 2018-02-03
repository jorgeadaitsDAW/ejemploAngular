import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

import { BindingComponent } from './binding/binding.component';

import { DirectivasComponent } from './directivas/directivas.component';
import { miPrimeraClaseDirectiva } from './directivas/miPrimeraDirectiva.directive';
import { miSegundaClaseDirectiva } from './directivas/miSegundaDirectiva.directive';

import { ClasePadreComponent } from './interaccion/clasePadre.component';
import { ClaseHijaComponent } from './interaccion/claseHija.component';
import { NombreAlumnoComponent } from './interaccion/nombreAlumno.component';

import { CicloVidaPadreComponent } from './cicloVida/cicloVidaPadre.component';
import { CicloVidaHijaComponent } from './cicloVida/cicloVidaHija.component';

import { PipeComponent } from './pipe/pipe.component';
import { CambiarNotaPipe } from './pipe/cambiarNota.pipe';
import { FiltroNotaPipe } from './pipe/filtroNota.pipe';

@NgModule({
  declarations: [
        AppComponent,

        BindingComponent,

        ClasePadreComponent,
        ClaseHijaComponent,
        NombreAlumnoComponent,

        DirectivasComponent,
        miPrimeraClaseDirectiva,
        miSegundaClaseDirectiva,

        CicloVidaPadreComponent,
        CicloVidaHijaComponent,

        PipeComponent,
        CambiarNotaPipe,
        FiltroNotaPipe

  ],
  imports: [
        BrowserModule,
        FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }