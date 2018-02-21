import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[miPrimeraDirectiva]'
})

export class miPrimeraClaseDirectiva {


    constructor(private el:ElementRef){
        el.nativeElement.style.backgroundColor = 'blue';
        el.nativeElement.style.color = 'yellow';
    }

    @HostListener('mouseenter') alEntrar(){
        this.el.nativeElement.style.backgroundColor = 'red';
    }

    @HostListener('mouseleave') alSalirElRaton() {
        this.el.nativeElement.style.backgroundColor = 'green';
    }

}


