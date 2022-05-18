import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbmContainerRoutingModule } from './abm-container-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ListadoPizzasComponent } from './componentes/listado-pizzas/listado-pizzas.component';
import { AltaPizzasComponent } from './componentes/alta-pizzas/alta-pizzas.component';
import { BajaPizzasComponent } from './componentes/baja-pizzas/baja-pizzas.component';
import { ModificarPizzasComponent } from './componentes/modificar-pizzas/modificar-pizzas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalComponent,
    ListadoPizzasComponent,
    AltaPizzasComponent,
    BajaPizzasComponent,
    ModificarPizzasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AbmContainerRoutingModule
  ]
})
export class AbmContainerModule { }
