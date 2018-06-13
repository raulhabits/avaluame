import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsageEnum, Usages } from '../../models/rates/item';
import { AbstractFormGroup } from '../../models/formulario';

@IonicPage()
@Component({
  selector: 'page-datos-fisicos',
  templateUrl: 'datos-fisicos.html',
})
export class DatosFisicosPage extends AbstractFormGroup {

  landArea: number;
  builtArea: number;
  usage: UsageEnum;
  ZHFGObservations: string;

  usages = Usages;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosFisicosPage');
  }

  saveData() {
    console.log(this);

  }
}
