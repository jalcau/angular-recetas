import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Detalle} from '../../model/detalle';

@Component({
  selector: 'app-recetadetalle',
  templateUrl: './recetadetalle.component.html',
  styleUrls: ['./recetadetalle.component.scss']
})
export class RecetadetalleComponent implements OnInit {
  show:boolean;
  glyphicon:string;

  @Input('r1') r1 : Detalle; // receta para mostrar
  //@Input('r2') r2 : Detalle; // receta para comparar

  constructor() {
    this.show=false;
   this.glyphicon="glyphicon-chevron-down";
   }

  ngOnInit() {
  }

  showIngredientes(){
    console.log('click ingredientes');
    this.show=!this.show
    this.glyphicon=(this.show)?'glyphicon-chevron-up':'glyphicon-chevron-down';
  }
  

}
