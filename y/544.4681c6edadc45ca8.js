"use strict";(self.webpackChunkrepartidor=self.webpackChunkrepartidor||[]).push([[544],{7544:(b,g,i)=>{i.r(g),i.d(g,{IngresoModule:()=>M});var u=i(9808),d=i(3809);class c{constructor(){this.correo="",this.pw=""}}var m=i(5226),h=i.n(m),e=i(5e3),p=i(7556),r=i(2382);const f=[{path:"login",component:(()=>{class n{constructor(t,o){this.data=t,this.router=o,this.email="",this.password="",this.grande="",this.unUsuario=new c,this.unUsuario2=new c}ngOnInit(){}logear(){this.data.login(this.email,this.password).then(t=>{this.unUsuario.correo=t.user.email,this.unUsuario.pw=t.user.uid,this.guardar=JSON.stringify(this.unUsuario),localStorage.setItem("usuario",this.guardar),this.data.boolean=!0,this.router.navigateByUrl("/home")}).catch(t=>h().fire({position:"center",icon:"error",title:"Datos incorrectos",showConfirmButton:!1,timer:1500}))}Hardcodear(){this.email="hernan@test.com",this.password="123456"}autocompletar(){let t=document.getElementById("select").value;this.email=t,this.password="123456"}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.e),e.Y36(d.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:27,vars:2,consts:[[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-6"],["id","login-box",1,"col-md-12"],["id","login-form","action","","method","post",1,"form"],[1,"text-center","text-info"],[1,"form-group"],["for","username",1,"text-info"],["id","validationServer01","type","email","name","email","placeholder","Correo electr\xf3nico","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","password",1,"text-info"],["type","password","name","password","id","password",1,"form-control",3,"ngModel","ngModelChange"],["type","button","name","submit","value","Iniciar Sesi\xf3n",1,"btn","btn-info","btn-md",3,"click"],["id","select",1,"form-select",3,"change"],["value","admin@admin.com"],["value","empleado@empleado.com"]],template:function(t,o){1&t&&(e.TgZ(0,"body")(1,"div")(2,"div",0)(3,"div",1)(4,"div",2)(5,"div",3)(6,"form",4)(7,"h3",5),e._uU(8,"Login"),e.qZA(),e.TgZ(9,"div",6)(10,"label",7),e._uU(11,"Usuario:"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"input",8),e.NdJ("ngModelChange",function(s){return o.email=s}),e.qZA()(),e.TgZ(14,"div",6)(15,"label",9),e._uU(16,"Contrase\xf1a:"),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"input",10),e.NdJ("ngModelChange",function(s){return o.password=s}),e.qZA()(),e.TgZ(19,"div",6)(20,"input",11),e.NdJ("click",function(){return o.logear()}),e.qZA()(),e.TgZ(21,"div")(22,"select",12),e.NdJ("change",function(){return o.autocompletar()}),e.TgZ(23,"option",13),e._uU(24,"Admin"),e.qZA(),e.TgZ(25,"option",14),e._uU(26,"Empleado"),e.qZA()()()()()()()()()()),2&t&&(e.xp6(13),e.Q6J("ngModel",o.email),e.xp6(5),e.Q6J("ngModel",o.password))},directives:[r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On,r.YN,r.Kr],styles:["body[_ngcontent-%COMP%]{min-height:78vh;background:#200122;background:linear-gradient(to right,#6f0000,#200122)}form[_ngcontent-%COMP%]{border:10px solid #f1f1f1;padding:50px;background:gray}input[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{width:100%;padding:12px 20px;margin:8px 0;display:inline-block;border:1px solid #ccc;box-sizing:border-box}button[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}button[_ngcontent-%COMP%]:hover{opacity:.8}.cancelbtn[_ngcontent-%COMP%]{width:auto;padding:10px 18px;background-color:#f44336}.aceptbtn[_ngcontent-%COMP%]{width:auto;padding:10px 18px;background-color:#3664f4}.imgcontainer[_ngcontent-%COMP%]{text-align:center;margin:24px 0 12px}img.avatar[_ngcontent-%COMP%]{width:40%;border-radius:50%}.container[_ngcontent-%COMP%]{padding:16px}span.psw[_ngcontent-%COMP%]{float:right;padding-top:16px}@media screen and (max-width: 300px){span.psw[_ngcontent-%COMP%]{display:block;float:none}.cancelbtn[_ngcontent-%COMP%]{width:100%}}select[_ngcontent-%COMP%]{width:100%;height:40px}"]}),n})()},{path:"registrar",component:(()=>{class n{constructor(t,o){this.router=t,this.authservice=o,this.mensaje=new c,this.email="",this.repetido="",this.unUsuario=new c}ngOnInit(){}EnviarMensaje(){this.mensaje.pw==this.repetido&&this.authservice.crearUsuario(this.mensaje.correo,this.mensaje.pw).then(t=>{this.router.navigate(["/home"])})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.F0),e.Y36(p.e))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-registrar"]],decls:22,vars:3,consts:[[1,"data"],[1,"container","bg","total"],[1,"row","justify-content-center"],[1,"form-container","w","d-flex","justify-content-center","align-items-center"],[1,"form-group"],["for","exampleInputEmail1"],["type","email","autocomplete","off","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Correo",1,"form-control",3,"ngModel","ngModelChange"],["id","emailHelp",1,"form-text","text-muted"],["for","exampleInputPassword1"],["type","password","id","exampleInputPassword1","placeholder","Contrase\xf1a",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-primary","btn-block",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"section",1)(2,"section",2)(3,"section")(4,"div",3)(5,"div")(6,"div",4)(7,"label",5),e._uU(8,"Ingresa correo"),e.qZA(),e.TgZ(9,"input",6),e.NdJ("ngModelChange",function(s){return o.mensaje.correo=s}),e.qZA(),e.TgZ(10,"small",7),e._uU(11,"Nunca compartiremos su correo electr\xf3nico con nadie m\xe1s."),e.qZA()(),e.TgZ(12,"div",4)(13,"label",8),e._uU(14," Ingresa contrase\xf1a"),e.qZA(),e.TgZ(15,"input",9),e.NdJ("ngModelChange",function(s){return o.mensaje.pw=s}),e.qZA()(),e.TgZ(16,"div",4)(17,"label",8),e._uU(18," Reingresa contrase\xf1a"),e.qZA(),e.TgZ(19,"input",9),e.NdJ("ngModelChange",function(s){return o.repetido=s}),e.qZA()(),e.TgZ(20,"button",10),e.NdJ("click",function(){return o.EnviarMensaje()}),e._uU(21,"Registrarse"),e.qZA()()()()()()()),2&t&&(e.xp6(9),e.Q6J("ngModel",o.mensaje.correo),e.xp6(6),e.Q6J("ngModel",o.mensaje.pw),e.xp6(4),e.Q6J("ngModel",o.repetido))},directives:[r.Fj,r.JJ,r.On],styles:[".data[_ngcontent-%COMP%]{padding-top:15px;min-height:85vh;background-color:#ff8c00}.form-container[_ngcontent-%COMP%]{margin-top:5px;top:10vh;background:#fff;padding:30px;border-radius:10px;box-shadow:0 0 10px #000}.total[_ngcontent-%COMP%]{height:100%}.w[_ngcontent-%COMP%]{max-width:350px}"]}),n})()}];let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(f)],d.Bz]}),n})(),M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.ez,C,r.u5]]}),n})()}}]);