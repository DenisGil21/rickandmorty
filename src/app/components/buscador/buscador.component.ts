import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit, AfterViewInit {
  @Input() placeholder:string = '';

  @ViewChild('txtTermino') busquedaValue!:ElementRef<HTMLInputElement>;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private cdRef:ChangeDetectorRef) { }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.busquedaValue.nativeElement.value = this.activatedRoute.snapshot.queryParamMap.get('busqueda') || '';
  }

  buscar(){
    // merge se utiliza para poder combinar parametros opcionales
    // aqui se quito el merge para que la busqueda empiece sin ningun otro parametro
    const termino = this.busquedaValue.nativeElement.value;
    if(termino.length === 0){
      this.router.navigate([], {queryParams:{busqueda:null}});
      return;
    }
    this.router.navigate([], {queryParams:{busqueda:termino}});
  }
}
