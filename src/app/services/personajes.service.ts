import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  public url: string = 'https://rickandmortyapi.com/api'

  constructor(private http: HttpClient) { }

  getPersonajes(filtro:string = ''){
    const options = filtro ?
    { params: new HttpParams().set('name', filtro) } : {};

    return this.http.get(`${this.url}/character`, options)
  }


}
