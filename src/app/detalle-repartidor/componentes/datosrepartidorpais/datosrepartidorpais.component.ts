import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosrepartidorpais',
  templateUrl: './datosrepartidorpais.component.html',
  styleUrls: ['./datosrepartidorpais.component.css']
})
export class DatosrepartidorpaisComponent implements OnInit {

  @Input() datapais:any;
  constructor() { }
 
  ngOnInit(): void {
  }

}
