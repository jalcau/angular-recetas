import { Component, OnInit } from '@angular/core';
import { Detalle } from '../model/detalle';
import { RecetasService } from '../providers/receta.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {
  stocks : Array<Detalle>;
  receta1 : Detalle;
 // receta2 : Detalle;
  recetaSelec : Detalle;

  constructor(private recetasService : RecetasService) { 

   

   // this.receta1= new Detalle("Receta1",undefined);
    //this.receta2= new Detalle("Receta2",undefined);
    this.stocks = new Array<Detalle>();
    //this.stocks.push(new Detalle('Marmitako','assets/imgs/marmitako.jpg'));
    //this.stocks.push(new Detalle('RaboDeToro','assets/imgs/rabodetoro.jpg'));
    //this.stocks.push(new Detalle('Tortilla',undefined));
    //this.stocks.push(new Detalle('RaboDeToro','assets/imgs/rabodetoro.jpg'));
  }

  ngOnInit() {
    this.stocks = this.recetasService.getAll();

    this.recetaSelec = this.stocks[0] || new Detalle('Anonimo','');
  }

  recibirDetalle(event){
    console.log("RecetarioComponent recibirDetalle %o", event.detalle);
      this.recetaSelec=event.detalle;
     // this.receta1 = event.detalle;
    }

}
