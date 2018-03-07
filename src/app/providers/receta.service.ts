import { Injectable } from '@angular/core';
import { Detalle } from '../model/detalle';
import { MOCK_RECETA } from './mocks.recetas';

@Injectable()
export class RecetasService {

  recetas : Detalle[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Detalle[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCK_RECETA);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Detalle(el.nombre,el.cocinero);
       receta.ingredientes = el.ingredientes;
       receta.imagen = el.imagen;
       receta.likes = el.likes;
       receta.cocinero = el.cocinero;
       receta.descripcion = el.descripcion;
       receta.isGlutenFree = el.isGlutenFree;
       
       el.ingredientes.forEach( ing => {
          receta.addIngredientes(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }
//Crear Nueva Receta
  crear(receta: Detalle):void{
    this.recetas.unshift(receta);
  }

}