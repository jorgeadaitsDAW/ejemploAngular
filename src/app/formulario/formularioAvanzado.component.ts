import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function nombreErroneoValidator(control: FormControl) { 
    let nombre = control.value; 
    if (nombre  === "MANOLO" || nombre === "PEPE"){
        return {
           nombreErroneo: {
             mensaje: "ESTE NOMBRE NO VALE" 
           } 
        } 
    }
    return null;
}


@Component({
  selector: 'formularioAvanzado',
  templateUrl: './formularioAvanzado.component.html'
})
export class FormularioAvanzadoComponent implements OnInit {

    titulo = "Formulario Registro en la WEB";

    loginForm:FormGroup;

    loginValor = "";  
    passwordLoginValor = "";

    constructor() { }

    ngOnInit() {
        this.loginForm = new FormGroup({
        'login': new FormControl(this.loginValor, 
          [
            Validators.required,
            Validators.minLength(4),
            nombreErroneoValidator
          ]
        ),
        
        'passwordLogin': new FormControl(this.passwordLoginValor, 
            [
              Validators.required,
              Validators.pattern('[A-Za-z]{6}')  
            ])
      });
    }

    get login() { return this.loginForm.get('login'); }

    get passwordLogin() { return this.loginForm.get('passwordLogin'); }

}