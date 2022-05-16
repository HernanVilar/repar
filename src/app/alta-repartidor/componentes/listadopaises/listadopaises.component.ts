import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';


@Component({
  selector: 'app-listadopaises',
  templateUrl: './listadopaises.component.html',
  styleUrls: ['./listadopaises.component.css']
})
export class ListadopaisesComponent implements OnInit {
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  list:any = [];
  constructor(private p:PaisesService)
   {
      p.obtenergit().subscribe((e:any)=>
        {
          for(let i = 0; i<5;i++)
          {
            this.list.push(e[i]);
          }
        })
   }

  ngOnInit(): void {
  }
  seleccionado(objecto:any)
  {
    this.paisSeleccionado.emit(objecto);
  }
}
