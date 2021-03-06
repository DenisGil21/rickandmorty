import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    PersonajesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  exports:[
  ]
})
export class PagesModule { }
