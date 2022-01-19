import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Info } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() current_page: number = 1;
  @Input() data_pages!: Info;
  @Output() sendCurrentPage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  cambiarPagina(cambio: number, especifico = false): void {
    if (!especifico) {
      this.current_page += cambio;
    } else {
      this.current_page = cambio;
    }
    this.sendCurrentPage.emit(this.current_page);
  }

  pagesNumber(): number[] {

    let desde = this.current_page - 7;
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
