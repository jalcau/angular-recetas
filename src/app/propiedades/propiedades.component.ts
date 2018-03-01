import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {
ocultar: boolean;
color: string;
enlace: string;
  constructor() {
    console.log('PropiedadesComponent constructor');
    this.ocultar=true;
    this.color="hotpink";
    this.enlace="https://angular.io/api"
   }

  ngOnInit() {
    console.log('PropiedadesComponent ngOnInit');
  }

}
