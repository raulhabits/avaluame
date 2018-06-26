import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DatosFisicos } from '../../models/avaluo';
import { ItemListService } from '../../models/rates/rate-list';

@IonicPage()
@Component({
  selector: 'page-datos-fisicos',
  templateUrl: 'datos-fisicos.html',
  providers:[ItemListService]
})
export class DatosFisicosPage {

  data: DatosFisicos = new DatosFisicos();
  usages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController,  public itemListService: ItemListService) {
    this.data = this.navParams.data;
    
    this.usages = itemListService.getUsages();
    console.log(this.data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosFisicosPage');
  }

  saveData() {
    console.log("save data", this.data);
    this.view.dismiss(this.data);
  }
}
