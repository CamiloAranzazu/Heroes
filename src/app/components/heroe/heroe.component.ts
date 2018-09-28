import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../Servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any ={};
  constructor(private activateroute:ActivatedRoute, private _heroesService:HeroesService) {
    this.activateroute.params.subscribe( params => {
                 this.heroe = this._heroesService.getHeroe(params['id']);
    })
   }

}
