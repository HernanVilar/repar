import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  pizzaSeleccionada!:Pizza;
  constructor() { }

  ngOnInit(): void {
  }
  evento(evento:Pizza)
  {
    this.pizzaSeleccionada = evento;
  }

}
