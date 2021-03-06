import { Component } from '@angular/core';

import {ListaDeseosProvider} from '../../app/services/lista-deseos.service';

import {NavController} from 'ionic-angular';
import {AgregarPage} from '../agregar/agregar';
import {DetallePage} from '../detalle/detalle'

/**
 * Generated class for the TerminadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-terminados',
  templateUrl: 'terminados.html',
})
export class TerminadosPage {

  constructor(private _listaDeseos:ListaDeseosProvider,
              private _navCtrl:NavController){
    console.log(this._listaDeseos);
  }

  /*irAgregar(){
    this._navCtrl.push(AgregarPage);
  }*/

  verDetalle(lista,idx){
    this._navCtrl.push(DetallePage,{lista,idx});
  }

}
