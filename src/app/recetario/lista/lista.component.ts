import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Detalle } from '../../model/detalle';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @Input('stockParametro') stocks : Array<Detalle>;
  //los parametros de salida se realizan a traves de Eventos
  @Output() eventoEmitir = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  seleccionar( event, receta : Detalle ){
    console.log('ListadoComponent Emitimos evento al ComponentePadre %o', receta );
    this.eventoEmitir.emit(  //event con 2 parametros
                              {
                                 "coche": receta ,
                                 "otroParametro" : 2018
                              }
                          );
  }

}
