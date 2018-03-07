import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaPadreComponent } from './prueba-padre.component';

describe('PruebaPadreComponent', () => {
  let component: PruebaPadreComponent;
  let fixture: ComponentFixture<PruebaPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PruebaPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
