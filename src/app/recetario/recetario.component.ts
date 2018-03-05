import { Component, OnInit } from '@angular/core';
import { Detalle } from '../model/detalle';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  stocks : Array<Detalle>;
  receta1 : Detalle;
  receta2 : Detalle;

  constructor() { 

    
    this.receta1= new Detalle("Receta1",undefined);
    this.receta2= new Detalle("Receta2",undefined);
    this.stocks = new Array<Detalle>();
    this.stocks.push(new Detalle('Marmitako','assets/imgs/mamitako.jpg'));
    this.stocks.push(new Detalle('RaboDeToro','assets/imgs/rabodetoro.jpg'));
  }

  ngOnInit() {
  }

  recibirDetalle(event){
    console.log("RecetarioComponent recibirDetalle %o", event.detalle);
      this.receta2 = this.receta1;
      this.receta1 = event.detalle;
    }

}
