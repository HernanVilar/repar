import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import { RepartidorService } from 'src/app/services/repartidor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-pizzas',
  templateUrl: './alta-pizzas.component.html',
  styleUrls: ['./alta-pizzas.component.css']
})
export class AltaPizzasComponent implements OnInit {


  unapizza:Pizza;
  public formGroup!: FormGroup;
  constructor(private fb:FormBuilder,private pizzaservice:PizzasService) 
  {
    this.unapizza = new Pizza();
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'nombre': ['',[Validators.required]],
      'ingrediente': ['',[Validators.required]],
      'precio': ['',[Validators.required]],
      'peso': ['',[Validators.required,Validators.min(500),Validators.max(1000)]],
    });
  }
  public aceptar()
  {
    console.log(this.formGroup.getRawValue().ingrediente);
    
      this.unapizza.nombre = this.formGroup.getRawValue().nombre;
      this.unapizza.ingredientes = this.formGroup.getRawValue().ingrediente;
      this.unapizza.precio = this.formGroup.getRawValue().precio;
      this.unapizza.peso = this.formGroup.getRawValue().peso;
        this.pizzaservice.create(this.unapizza).then(()=>{

        })
}

}
