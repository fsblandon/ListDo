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
    this.cargarData();

  }

  actualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  cargarData(){
    if(localStorage.getItem("data")){
      this.listas = JSON.parse(localStorage.getItem("data"));
    }

  }

  agregarData(lista:Lista){
    this.listas.push(lista);
    this.actualizarData();
  }

  eliminarData(idx:number){
    this.listas.splice(idx,1);
    this.actualizarData();
  }

}
