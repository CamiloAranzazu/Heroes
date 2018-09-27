import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
    mostrar = true;
    frase: any = {
      mensaje: 'Un gran poder requiere una responsabilidad',
      autor: 'Ben Parker'
    };
    tecnologias: string[] = ['Angular', 'Jquery', 'SQlserver', 'Node'];
}
