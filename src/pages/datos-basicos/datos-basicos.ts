import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatosBasicos, AvaluoService } from '../../models/avaluo';

/**
 * Generated class for the DatosBasicosObservacionesInicialesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-basicos',
  templateUrl: 'datos-basicos.html'
})
export class DatosBasicosPage {

  data: DatosBasicos = new DatosBasicos();

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
    this.data = this.navParams.data;
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosBasicosObservacionesInicialesPage');
  }

  saveData() {
    console.log("save data", this.data);
    this.view.dismiss(this.data);
  }

}
