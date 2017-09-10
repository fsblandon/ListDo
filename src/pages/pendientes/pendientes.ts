import { Component } from '@angular/core';
import {ListaDeseosProvider} from '../../app/services/lista-deseos.service';


/**
 * Generated class for the PendientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-pendientes',
  templateUrl: 'pendientes.html',
})
export class PendientesPage {

  constructor(private _listaDeseos:ListaDeseosProvider){
    console.log(this._listaDeseos);
  }

}
