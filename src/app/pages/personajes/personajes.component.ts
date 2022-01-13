import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnChanges {

  @Input() busqueda: string = '';

  public personajes: any = [];
  
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  ngOnChanges(): void {
      this.obtenerPersonajes();
  }

  

  obtenerPersonajes(){
    this.personajesService.getPersonajes(this.busqueda)
    .subscribe((resp:any) => {
      this.personajes = resp.results;
      console.log(this.personajes);
      
    });
  }

}
