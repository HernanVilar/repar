import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../../clases/login';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email:string = "";
  password:string = "";
  grande : any = "";
  unUsuario: Login = new Login();
  unUsuario2: Login = new Login();
  guardar!:string;

  
  constructor(private data:AuthService, public router:Router) { }

  ngOnInit(): void {
  }
  logear()
  {
    this.data.login(this.email,this.password).then((res:any) => {
      
      this.unUsuario.correo = res.user.email;
      this.unUsuario.pw = res.user.uid;
      this.guardar =  JSON.stringify(this.unUsuario);
      localStorage.setItem("usuario",this.guardar);
        this.data.boolean = true;
        this.router.navigateByUrl('/home');
    }).catch(err => 
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Datos incorrectos',
        showConfirmButton: false,
        timer: 1500
      }));
  }
  Hardcodear()
  {
    this.email = "hernan@test.com";
    this.password = "123456";
  }
  autocompletar()
  {
    let data = (<HTMLInputElement>document.getElementById('select')).value;
    this.email = data;
    this.password = "123456";
  }

}
