import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { BuscadorComponent } from './buscador/buscador.component';



@NgModule({
  declarations: [
    PaginationComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    BuscadorComponent
  ]
})
export class ComponentsModule { }
