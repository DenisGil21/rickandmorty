import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PersonajesData } from '../interfaces/personaje.interface';

const url = 'https://rickandmortyapi.com/api';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getPersonajes(filtro:string = '', page:number = 1):Observable<PersonajesData>{

    let params = new HttpParams();
    params = params.set('page',page);
    if (filtro) {
      params = params.set('name', filtro);
    }

    return this.http.get<PersonajesData>(`${url}/character`, {params})
  }


}
