import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[miPrimeraDirectiva]'
})

export class miPrimeraClaseDirectiva {

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    @HostListener('mouseenter') alEntraElRaton() {
        this.el.nativeElement.style.backgroundColor = 'green';
    }

    @HostListener('mouseleave') alSalirElRaton() {
        this.el.nativeElement.style.backgroundColor = null;
    }

}


