import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpGitService {

  private url = "https://api.github.com/users/cratos300"
  constructor(private http:HttpClient) { }

  obtenergit()
  {
    return this.http.get(this.url)
  }
}
