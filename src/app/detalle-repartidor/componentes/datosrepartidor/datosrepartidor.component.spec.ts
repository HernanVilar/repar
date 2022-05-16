import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosrepartidorComponent } from './datosrepartidor.component';

describe('DatosrepartidorComponent', () => {
  let component: DatosrepartidorComponent;
  let fixture: ComponentFixture<DatosrepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosrepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosrepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
