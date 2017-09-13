import { Component } from '@angular/core';
import {NavParams,NavController} from 'ionic-angular';
import {Lista} from '../../app/clases/listas';
import {ListaItem} from '../../app/clases/lista-item';
import {ListaDeseosProvider} from '../../app/services/lista-deseos.service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  idx:number;
  lista:Lista;

  constructor(public navParams:NavParams,
              public navCtrl:NavController,
              public listaDeseos:ListaDeseosProvider,
              public alertCtrl: AlertController) {

    this.idx = this.navParams.get("idx");
    this.lista = this.navParams.get("lista");

    console.log(navParams);
  }

  actualizar(item:ListaItem){
    item.completado = !item.completado;

    let todosMarcados = true;

    for(let item of this.lista.items){
      if(!item.completado){
        todosMarcados = false;
        break;
      }

    }
    this.lista.terminado = todosMarcados;

    this.listaDeseos.actualizarData();
  }

  borrarItem(){
    let confirm = this.alertCtrl.create({
    title: this.lista.nombre,
    message: '¿Deseas borrar la lista?',
    buttons: ['Cancelar',
        {
          text: 'Eliminar',
          handler: () => {
            this.listaDeseos.eliminarData(this.idx);
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }


}
