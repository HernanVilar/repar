import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { CambiarService } from '../services/cambiar.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianinicioGuard implements CanActivate {
  constructor(private auth:AuthService, private router:Router,private verificar:CambiarService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.auth.verificar().then(valor =>{
        if(valor == null) { // <- aquí 'this.valorRetorno' es igual a 'valor' podrías usar directamente el parámetro 'valor'
           this.verificar.listo = true;
          return true;
           // acá en el "futuro" se resolverá la promesa y Angular sabrá si puede o no activar la ruta
       } else {
          this.router.navigateByUrl('/home');
          return false; // acá en el "futuro" se resolverá la promesa y Angular sabrá si puede o no activar la ruta
     }
    });
  }
  
}
