import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    if (termino.length !== 0){
      this.router.navigateByUrl(`personaje/${termino}`);
    }else{
      this.router.navigateByUrl('home');
    }
  }



}
