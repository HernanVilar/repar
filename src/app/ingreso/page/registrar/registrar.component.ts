import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../../../clases/login';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  mensaje:Login = new Login();
  email:string = "";
  repetido:string = "";
  guardado:any;
  unUsuario: Login = new Login();
  guardar!:string;

  constructor(private router:Router,private authservice:AuthService) { 
  }

  ngOnInit(): void {
  }
  EnviarMensaje()
  {
    if(this.mensaje.pw == this.repetido)
    {
      this.authservice.crearUsuario(this.mensaje.correo,this.mensaje.pw).then((data:any)=>{
          this.router.navigate(['/home']);
      
    })
  }  
}
}



