import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRepartidorRoutingModule } from './alta-repartidor-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListadopaisesComponent } from './componentes/listadopaises/listadopaises.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalComponent,
    ListadopaisesComponent,
    FormularioComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,    
    AltaRepartidorRoutingModule
  ]
})
export class AltaRepartidorModule { }
