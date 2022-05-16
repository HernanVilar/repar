import { Component, OnInit } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  repartidor!:Repartidor;
  constructor()
  {
  }

  ngOnInit(): void {
  }
  obtenerRepartidor(rep:Repartidor)
  {
    this.repartidor = rep;
  }
}
