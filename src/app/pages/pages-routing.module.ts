import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonajesComponent } from './personajes/personajes.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path: 'home',
        component:PersonajesComponent
      },
      {
        path: '',
        redirectTo:'/home',
        pathMatch: 'full'
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class PagesRoutingModule { }
