import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje, Info } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnChanges {

  @Input() busqueda: string = '';

  public personajes: Personaje[] = [];
  public info!: Info;
  public current_page: number = 1;

  public cargando: boolean = true;

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.obtenerPersonajes(this.busqueda,this.current_page);
  }

  ngOnChanges(): void {        
    this.obtenerPersonajes(this.busqueda,this.current_page);

  }



  obtenerPersonajes(busqueda:string, pagina: number): void {
    this.cargando = true;
    this.personajesService.getPersonajes(busqueda, pagina)
      .subscribe(resp => {
        this.personajes = resp.results;
        this.info = resp.info;
        this.cargando = false;

      }, (err) => {
        this.cargando = false;
        this.personajes = [];
      });
  }

  cambiarPagina(event:number){
    this.current_page = event;
    this.obtenerPersonajes(this.busqueda,this.current_page);
  }

}
