import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Repartidor } from 'src/app/clases/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Input() mostrar:any;
  unrepartidor:Repartidor;
  public formGroup!: FormGroup;
  constructor(private fb:FormBuilder,private repatidorservice:RepartidorService) 
  {
    this.unrepartidor = new Repartidor();

    
  }

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      'dni': ['',[Validators.required]],
      'nombre': ['',[Validators.required]],
      'edad': ['',[Validators.required, Validators.min(18),Validators.max(99)]],
      'sexo': ['',[Validators.required]],
      'capacidad_transporte': ['',[Validators.required]],

    });
  }
  public aceptar()
  {
    if(this.mostrar == undefined)
    {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: 'Seleccione un pais Obligatoriamente!',
      })
    }
    else
    {
      this.unrepartidor.dni = this.formGroup.getRawValue().dni;
      this.unrepartidor.nombre = this.formGroup.getRawValue().nombre;
      this.unrepartidor.edad = this.formGroup.getRawValue().edad;
      this.unrepartidor.sexo = this.formGroup.getRawValue().sexo;
      this.unrepartidor.pais = this.mostrar;
      this.unrepartidor.capacidad_transporte = this.formGroup.getRawValue().capacidad_transporte;
        this.repatidorservice.create(this.unrepartidor).then(()=>{
          console.log("mensaje enviado");
          Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Repartidor dado de alta!!',
          showConfirmButton: false,
          timer: 1500,
        })
        })
    }
}

}
