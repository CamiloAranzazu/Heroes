import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../Servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heores: Heroe[] = [];
  constructor( private _heroesService: HeroesService, private router:Router) {

  }

  ngOnInit() {
  this.heores = this._heroesService.getHeroes();
  console.log(this.heores);
  }
  direccionar(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
