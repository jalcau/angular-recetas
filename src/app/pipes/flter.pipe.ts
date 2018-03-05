import { Pipe, PipeTransform } from '@angular/core';
import {Coche} from '../model/coche';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
    /**
     * Filtro para buscar en una colecion de coches
     * @param stocks : Coche[]
     * @param searchText : string con la marca o modelo
     */

  transform(stocks: Coche[], searchText: string): Coche[] {

    if(!stocks) return [];
    if(!searchText) return stocks;
    searchText = searchText.toLowerCase();
    let marcaModelo = "";
    return stocks.filter( it => {
        marcaModelo= it.marca +" "+ it.modelo;
        marcaModelo= marcaModelo.toLowerCase();
        return marcaModelo.toLowerCase().includes(searchText);
    });
   }

}
