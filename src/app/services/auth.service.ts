import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data:any;
  boolean:boolean = false;
  
  constructor(private a:AngularFireAuth,private router:Router) { 
  }
  login(email:string,password:string)
  {
    return new Promise((resolve,rejected)=>{
      this.a.signInWithEmailAndPassword(email,password).then((us:any) =>{
        this.data = us.user?.email;
        resolve(us);
    }).catch((err:any) => rejected(err));
   })
  }
  verificar()
  {
    return new Promise((resolve,rejected)=>{
     this.a.onAuthStateChanged(e=>{
        resolve(e);
      });
    })
  }
  deslogear()
  {
    this.a.signOut().then((e:any)=>{
      this.boolean = false;
      localStorage.removeItem("usuario");
      this.router.navigate(['']);
    }).catch((e:any)=>{
      alert("No se pudo deslogear");
    })
  }
  crearUsuario(email:string,password:string)
  {
    return new Promise((resolve,rejected)=>{
      this.a.createUserWithEmailAndPassword(email,password).then((user:any)=>{
        resolve(user)
      }).catch((err:any) => rejected(err));
    })
  }
}

