import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Lista} from '../clases/listas';

/*
  Generated class for the ListaDeseosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaDeseosProvider {

  listas:Lista[] = [];

  constructor() {
    let lista1 = new Lista('compras supermecado');
    let lista2 = new Lista('juegos que deseo');
    let lista3 = new Lista('cosas de la universidad');

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log('Hello ListaDeseosProvider Provider');
  }

}
