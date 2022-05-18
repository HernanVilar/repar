import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';

@Component({
  selector: 'app-baja-pizzas',
  templateUrl: './baja-pizzas.component.html',
  styleUrls: ['./baja-pizzas.component.css']
})
export class BajaPizzasComponent implements OnInit {

  @Input() datoborrar!:Pizza;
  constructor() { 
  }

  ngOnInit(): void {
  }

}
