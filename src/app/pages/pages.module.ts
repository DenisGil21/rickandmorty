import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BusquedaComponent } from './busqueda/busqueda.component';



@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
    BusquedaComponent
  ]
})
export class PagesModule { }
