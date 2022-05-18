import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { AuthService } from 'src/app/services/auth.service';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-modificar-pizzas',
  templateUrl: './modificar-pizzas.component.html',
  styleUrls: ['./modificar-pizzas.component.css']
})
export class ModificarPizzasComponent implements OnInit {

  @Input() datoborrar!:Pizza;
  objectomodificar!:Pizza;
  transformar!:string;
  transformar2!:string;



  constructor(private listapizza:PizzasService,private auth:AuthService) 
  {  
  }


  ngOnInit(): void {
  }
  modificar()
  {
    this.objectomodificar.nombre = (<HTMLInputElement>document.getElementById('nombree')).value;
    this.objectomodificar.ingredientes = (<HTMLInputElement>document.getElementById('ingredientee')).value;
    this.transformar = (<HTMLInputElement>document.getElementById('precioo')).value;
    this.objectomodificar.precio = parseInt(this.transformar);
    this.transformar2 = (<HTMLInputElement>document.getElementById('pesoo')).value;
    this.objectomodificar.peso = parseInt(this.transformar2);
    this.listapizza.getAll().get().subscribe(e=>e.forEach(e=>{
      
      if(e.data().nombre == this.objectomodificar.nombre)
      {  
        this.listapizza.update(e.id,this.objectomodificar);
      }
    }))
  }

}
