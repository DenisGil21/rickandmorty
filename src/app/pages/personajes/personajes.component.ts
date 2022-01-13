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
  public info:any;
  public current_page:number = 1;

  public cargando:boolean = true;
  
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.obtenerPersonajes();
  }

  ngOnChanges(): void {
      this.obtenerPersonajes();
  }

  

  obtenerPersonajes(){
    this.cargando = true;
    this.personajesService.getPersonajes(this.busqueda)
    .subscribe((resp:any) => {
      this.personajes = resp.results;
      this.info = resp.info;
      this.cargando = false;
      
    },(err) => {      
      this.cargando = false;
      this.personajes = [];
    });
  }

  cambiarPagina(cambio:number,especifico=false){
    if (!especifico) {
      this.current_page +=cambio;
    }else{
      this.current_page = cambio;
    }
    this.cargando = true;
    this.personajesService.getPersonajes(this.busqueda,this.current_page)
    .subscribe((resp:any) => {
      this.personajes = resp.results;
      this.info = resp.info;    
      this.cargando = false;
    })
  }

  pagesNumber(){    
    let desde = this.current_page - 2;
    if (desde < 1) {
      desde = 1;
    }

    let hasta = desde + 9;
    if (hasta >= this.info.pages) {
      hasta = this.info.pages;
    }
    let pageArray:any[]=[];
    while (desde <= hasta) {
      pageArray.push(desde);
      desde ++;
    }
    
    return pageArray;
  }

}
