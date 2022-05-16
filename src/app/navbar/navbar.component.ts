import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CambiarService } from '../services/cambiar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthService,private router:Router,public verificar:CambiarService) 
  {  

    
  }

  ngOnInit(): void {
  }
  cerrar()
  {
    this.auth.deslogear();
    this.verificar.logeado = false;
    this.router.navigateByUrl('/ingreso/login');
  }

}
