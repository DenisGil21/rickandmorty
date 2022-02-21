import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Info } from '../../interfaces/personaje.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  public current_page: number = 1;
  @Input() data_pages!: Info;

  constructor(private router:Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams
    .subscribe(params => {
      if (!params.page) {
        this.current_page = 1;
      }else{
        this.current_page = params.page;
      }
      
    });
  }

  ngOnChanges(): void {
  }

  cambiarPagina(cambio: number, especifico = false): void {
    if (!especifico) {
      this.current_page += cambio;
    } else {
      this.current_page = cambio;
    }
    if(this.current_page === 1){
      this.router.navigate([], {queryParams:{page:null},queryParamsHandling: 'merge'});
      return;
    }
    this.router.navigate([], {queryParams:{page:this.current_page},queryParamsHandling: 'merge'});
  }

  pagesNumber(): number[] {

    let desde = this.current_page - 6;
    if (desde < 1) {
      desde = 1;
    }

    let hasta = desde + 9;
    if (hasta >= this.data_pages.pages) {
      hasta = this.data_pages.pages;
    }
    let pageArray: number[] = [];
    while (desde <= hasta) {
      pageArray.push(desde);
      desde++;
    }

    return pageArray;

    // pageArray = Array.from({ length: 10 }, (x, i) => i + desde);
  }

}
