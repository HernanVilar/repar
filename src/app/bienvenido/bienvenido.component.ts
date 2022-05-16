import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { HttpGitService } from '../services/http-git.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  imgurl:string = "";
  nombre:string = "";
  constructor(private httpgit:HttpGitService,private auth:AuthService)
   {
      httpgit.obtenergit().subscribe((e:any)=>{
        this.imgurl = e.avatar_url;
        this.nombre = e.login;
      });
      auth.verificar();
   }

  ngOnInit(): void {
  }

}
