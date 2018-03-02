import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Coche} from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  @Input('cocheParametro') coche : Coche;


  @Output() cocheSeleccionado= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  seleccionar($event){
    this.cocheSeleccionado.emit({coche: this.coche});
    console.log("Emitimos evento al ComponentPadre %o",this.coche);

  }
}
