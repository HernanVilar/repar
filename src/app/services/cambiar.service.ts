import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CambiarService {

  public logeado : boolean = false;
  public listo:boolean = false;
  constructor() { }
}
