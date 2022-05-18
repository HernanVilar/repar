import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiantipoGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.verificar().then((valor:any) =>{
        if(valor == null) { // <- aquí 'this.valorRetorno' es igual a 'valor' podrías usar directamente el parámetro 'valor'
          this.router.navigateByUrl('/ingreso/login');
          return false;
           // acá en el "futuro" se resolverá la promesa y Angular sabrá si puede o no activar la ruta
       } else {
          if(valor.email == "admin@admin.com")
          {
            return true;
          }
          else 
          {
            return false;
          }
         // acá en el "futuro" se resolverá la promesa y Angular sabrá si puede o no activar la ruta
     }
    });
  }
  
}
