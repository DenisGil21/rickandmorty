import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje, Info } from '../../interfaces/personaje.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes: Personaje[] = [];
  public info!: Info;
  public current_page: number = 1;

  public cargando: boolean = true;

  constructor(private personajesService: PersonajesService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {      
      let paramsArr = Object.keys(params);
      if (paramsArr.indexOf('page') === 0 && params.busqueda) {
        this.router.navigate([], {queryParams:{page:null}});
      }
          
      this.obtenerPersonajes(params.busqueda,params.page);
    });
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

}
