import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPizzasComponent } from './alta-pizzas.component';

describe('AltaPizzasComponent', () => {
  let component: AltaPizzasComponent;
  let fixture: ComponentFixture<AltaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
