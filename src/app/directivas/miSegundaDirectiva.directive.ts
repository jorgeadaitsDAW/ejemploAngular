import { Directive,ElementRef,HostListener, Input} from '@angular/core';

@Directive({
  selector: '[miSegundaDirectiva]'
})

export class miSegundaClaseDirectiva {

    @Input() pepito: string;
    @Input('miSegundaDirectiva') colorAsignado:String


    constructor(private el: ElementRef) {

    }

    @HostListener('mouseenter') alEntraElRaton() {
        this.el.nativeElement.style.backgroundColor =  this.colorAsignado || this.pepito;
    }

    @HostListener('mouseleave') alSalirElRaton() {
        this.el.nativeElement.style.backgroundColor = null;
    }

}


