import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  unPais:any
  constructor() { 
  }

  ngOnInit(): void {
  }
  click(data:any)
  {
    this.unPais = data;
  }

}
