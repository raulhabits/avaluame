import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbstractFormGroup } from '../../models/formulario';

/**
 * Generated class for the DatosBasicosObservacionesInicialesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-basicos',
  templateUrl: 'datos-basicos.html',
})
export class DatosBasicosPage extends AbstractFormGroup {

  requestNumber: string;
  sectorCode: string;
  mainAddress: string;
  secondaryAddress: string;

  initialComments: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosBasicosObservacionesInicialesPage');
  }

  saveData() {
    console.log(this);

  }

}
