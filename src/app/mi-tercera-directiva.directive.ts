import { Directive,ElementRef,HostListener, Input } from '@angular/core';

declare var $:any;

@Directive({
  selector: '[appMiTerceraDirectiva]'
})
export class MiTerceraDirectivaDirective {

  @Input() ancho:String;
  @Input() color:String;
  @Input('appMiTerceraDirectiva') colorFondo:String;


  constructor(private el: ElementRef) {

  }

  @HostListener('click') agrandar() {
    this.el.nativeElement.style.width = this.ancho;
    this.el.nativeElement.style.color = this.color;
    $(this.el.nativeElement).text("PRUEBA");
    $("#prueba3").text("ADIOSSSSSS");
    this.el.nativeElement.style.backgroundColor = this.colorFondo;
  }

  @HostListener('dblclick') quitar() {
    this.el.nativeElement.style.width = '100px';
    this.el.nativeElement.style.color = 'blue';
}


}








