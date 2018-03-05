import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Detalle} from '../../model/detalle';

@Component({
  selector: 'app-recetadetalle',
  templateUrl: './recetadetalle.component.html',
  styleUrls: ['./recetadetalle.component.scss']
})
export class RecetadetalleComponent implements OnInit {

  @Input('r1') r1 : Detalle; // receta para mostrar
  @Input('r2') r2 : Detalle; // receta para comparar

  constructor() { }

  ngOnInit() {
  }

}
