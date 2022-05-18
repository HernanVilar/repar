import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-baja-pizzas',
  templateUrl: './baja-pizzas.component.html',
  styleUrls: ['./baja-pizzas.component.css']
})
export class BajaPizzasComponent implements OnInit {

  @Input() datoborrar!:Pizza;
  constructor(private listpizzas:PizzasService) { 
  }

  ngOnInit(): void {
  }
  
  Borrar()
  {
    this.listpizzas.getAll().get().subscribe(e=>e.forEach(e=>{
      if(e.data().nombre == this.datoborrar.nombre)
      {
        this.listpizzas.delete(e.id);
      }
    }))
  }

}
