import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaHijoComponent } from './prueba-hijo.component';

describe('PruebaHijoComponent', () => {
  let component: PruebaHijoComponent;
  let fixture: ComponentFixture<PruebaHijoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaHijoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
