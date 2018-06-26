import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Propietario } from '../../models/avaluo';
import { ItemListService } from '../../models/rates/rate-list';

/**
 * Generated class for the InformacionJuridicaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion-juridica',
  templateUrl: 'informacion-juridica.html'
})
export class InformacionJuridicaPage {

  data: Propietario[];
  idTypes = ['Cedula de ciudadania', 'Cedula de extranjeria'];

  constructor(public navCtrl: NavController, public navParams: NavParams,  public view: ViewController) {
    this.data = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionJuridicaPage');
  }

  addOwner() {
    this.data.push(new Propietario());
  }

  deleteOwner(index) {
    this.data.splice(index, 1);
  }

  saveData() {
    this.view.dismiss(this.data);
  }
}
