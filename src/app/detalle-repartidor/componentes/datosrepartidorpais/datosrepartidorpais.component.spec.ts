import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosrepartidorpaisComponent } from './datosrepartidorpais.component';

describe('DatosrepartidorpaisComponent', () => {
  let component: DatosrepartidorpaisComponent;
  let fixture: ComponentFixture<DatosrepartidorpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosrepartidorpaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosrepartidorpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
