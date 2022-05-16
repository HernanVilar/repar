import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url = "https://restcountries.com/v3.1/region/Europe"
  constructor(private http:HttpClient) { }

  obtenergit()
  {
    return this.http.get(this.url)
  }
}
