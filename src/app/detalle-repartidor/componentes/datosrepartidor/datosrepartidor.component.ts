import { Component, Input, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
@Component({
  selector: 'app-datosrepartidor',
  templateUrl: './datosrepartidor.component.html',
  styleUrls: ['./datosrepartidor.component.css']
})
export class DatosrepartidorComponent implements OnInit {
  @Input() repartidor!:Repartidor;
  constructor() 
  {
  }

  ngOnInit(): void {
  }

}
