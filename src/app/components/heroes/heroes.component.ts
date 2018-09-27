import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../Servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heores: any[] = [];
  constructor( private _heroesService: HeroesService) {

  }

  ngOnInit() {
  this.heores = this._heroesService.getHeroes();
  console.log(this.heores);
  }

}
