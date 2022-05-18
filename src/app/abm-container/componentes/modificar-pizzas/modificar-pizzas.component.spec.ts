import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPizzasComponent } from './modificar-pizzas.component';

describe('ModificarPizzasComponent', () => {
  let component: ModificarPizzasComponent;
  let fixture: ComponentFixture<ModificarPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
