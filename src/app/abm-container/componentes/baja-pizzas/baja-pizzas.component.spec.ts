import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPizzasComponent } from './baja-pizzas.component';

describe('BajaPizzasComponent', () => {
  let component: BajaPizzasComponent;
  let fixture: ComponentFixture<BajaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BajaPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BajaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
