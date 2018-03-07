import { Pipe, PipeTransform } from '@angular/core';
import { Detalle } from '../model/detalle';

@Pipe({name: 'filterRecetas'})
export class FilterRecetas implements PipeTransform {

  transform(recetas: Detalle[], searchText: string, isGlutenFree : boolean ): Detalle[] {  

    //si no hay recetas retornar vacio
    if (!recetas) return [];

    let recetasFilterArray: Detalle[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetas.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = recetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {
        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();
        return receta.includes(searchText);
      });
    }
  }

}