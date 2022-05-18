import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { GuardianAutentificadorGuard } from './guard/guardian-autentificador.guard';
import { GuardianinicioGuard } from './guard/guardianinicio.guard';
import { GuardiantipoGuard } from './guard/guardiantipo.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes =
[
  {path:'', redirectTo: 'bienvenido',pathMatch:'full'},
  {path:'home',component:HomeComponent,canActivate:[GuardianAutentificadorGuard]},
  {path:'bienvenido',component:BienvenidoComponent,canActivate:[GuardianinicioGuard]},
  {path: 'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => m.IngresoModule),canActivate:[GuardianinicioGuard] },
  {path: 'altaRepartidor', loadChildren: () => import('./alta-repartidor/alta-repartidor.module').then(m => m.AltaRepartidorModule),canActivate:[GuardianAutentificadorGuard] },
  {path: 'detalleRepartidor', loadChildren: () => import('./detalle-repartidor/detalle-repartidor.module').then(m => m.DetalleRepartidorModule),canActivate:[GuardianAutentificadorGuard] },
  {path: 'salenPizzas', loadChildren: () => import('./abm-container/abm-container.module').then(m => m.AbmContainerModule),canActivate:[GuardiantipoGuard]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
