import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService} from 'src/app/services/repartidor.service';


@Component({
  selector: 'app-listado-repartidor',
  templateUrl: './listado-repartidor.component.html',
  styleUrls: ['./listado-repartidor.component.css']
})
export class ListadoRepartidorComponent implements OnInit {
  list:any = [];
  @Output() repartidorSeleccionado: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(listado:RepartidorService) 
  {
    listado.getAll().get().subscribe(e=>{
      e.query.get().then((e:any)=>{
         for(let i = 0; i<e.docs.length;i++)
         {
           this.list.push(e.docs[i].data());
         }
 
         
       })
       
     })
  }

  ngOnInit(): void {
  }
  disparoOuput(data:Repartidor)
  {
    this.repartidorSeleccionado.emit(data);
  }

}
