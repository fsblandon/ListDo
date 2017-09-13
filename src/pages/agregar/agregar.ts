import { Component } from '@angular/core';

import {ListaItem} from '../../app/clases/lista-item';
import {Lista} from '../../app/clases/listas';

import { AlertController, NavController } from 'ionic-angular';
import {PendientesPage} from '../pendientes/pendientes';
import {ListaDeseosProvider} from '../../app/services/lista-deseos.service';

/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  nomLista:string = "";
  nomItem:string = "";

  items:ListaItem[] = [];

  status:boolean = false;

  constructor(private navCtrl:NavController,
              private alertCtrl:AlertController,
              private listaDeseos:ListaDeseosProvider) {
  }

  agregarItem(){
    if(this.nomItem.length == 0){
      return;
    }

    let item = new ListaItem();
    item.nombre = this.nomItem;

    this.items.push(item);
    this.nomItem = "";
  }

  eliminarItem(index:number){

    if(this.items.length == 0){
      return;
    }
    if(index>=0){
      this.items.splice(index,1);
    }
  }

  agregarLista(){
    if(this.nomLista.length == 0){
      let alert = this.alertCtrl.create({
        title: 'Nombre de la lista',
        subTitle: 'El nombre de la lista es necesaria',
        buttons: ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nomLista);
    lista.items = this.items;

    //this.listaDeseos.listas.push(lista);
    this.listaDeseos.agregarData(lista);
    this.navCtrl.pop();
  }
}
