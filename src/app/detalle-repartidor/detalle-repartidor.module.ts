import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRepartidorRoutingModule } from './detalle-repartidor-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoRepartidorComponent } from './componentes/listado-repartidor/listado-repartidor.component';
import { DatosrepartidorComponent } from './componentes/datosrepartidor/datosrepartidor.component';
import { DatosrepartidorpaisComponent } from './componentes/datosrepartidorpais/datosrepartidorpais.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    ListadoRepartidorComponent,
    DatosrepartidorComponent,
    DatosrepartidorpaisComponent
  ],
  imports: [
    CommonModule,
    DetalleRepartidorRoutingModule
  ]
})
export class DetalleRepartidorModule { }
