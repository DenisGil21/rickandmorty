import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  public url: string = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getPersonajes(filtro:string = '', page:number = 1){

    let params = new HttpParams();
    params = params.set('page',page);
    if (filtro) {
      params = params.set('name', filtro);
    }

    return this.http.get(`${this.url}/character`, {params})
  }


}
