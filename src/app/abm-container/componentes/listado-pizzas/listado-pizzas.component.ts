import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-listado-pizzas',
  templateUrl: './listado-pizzas.component.html',
  styleUrls: ['./listado-pizzas.component.css']
})
export class ListadoPizzasComponent implements OnInit {
  list:any;
  @Output() pizzaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  constructor(private listado:PizzasService)
  {
    listado.getAll().valueChanges().subscribe(e=>{
      this.list = [];
      for(let i = 0; i<e.length;i++)
      {
        this.list.push(e[i]);
      }
    })
  }

  ngOnInit(): void {
  }

  disparoOuput(data:Pizza)
  {
    this.pizzaSeleccionada.emit(data);
  }
}
