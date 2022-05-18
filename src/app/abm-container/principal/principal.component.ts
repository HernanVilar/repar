import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  pizzaSeleccionada!:Pizza;
  constructor(private auth:AuthService) 
  {
    auth.verificar().then((e:any)=>{
   
      
    })
  }

  ngOnInit(): void {
  }
  evento(evento:Pizza)
  {
    this.pizzaSeleccionada = evento;
  }

}
