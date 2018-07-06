import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions, Modal, AlertController } from 'ionic-angular';
import { InformacionAdicionalAreaConstruida } from '../../models/avaluo';
import { AreaConstruidaCreatePage } from '../area-construida-create/area-construida-create';
import { CalificacionPage } from '../calificacion/calificacion';
import { Usage} from '../../models/rates/item';
import { ItemListService } from '../../models/rates/rate-list';

/**
 * Generated class for the AreaConstruidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-construida',
  templateUrl: 'area-construida.html',
  providers:[ItemListService]
})
export class AreaConstruidaPage {

  areaConstruidaCreatePage: AreaConstruidaCreatePage;
  calificacionPage: CalificacionPage;
  data: InformacionAdicionalAreaConstruida[] = [];
  usageEnum = Usage;
  usages: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modalController: ModalController, public alertCtrl: AlertController, public itemListService: ItemListService) {
    this.data = this.navParams.data;
    this.usages = Array.from(itemListService.getUsages());
    console.log(this);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaConstruidaPage');
  }

  addBuiltArea() {
    let area = new InformacionAdicionalAreaConstruida();
    this.data.push(area);
    console.log(this.data);
  }

  deleteBuiltArea(index:number) {
    this.data.splice(index, 1);
  }

  fillRateOfBuiltArea(index: number) {
    console.log(this);
    if(this.data[index].usage) {
      let config: ModalOptions = {
        enableBackdropDismiss:true
      };
      let modal: Modal = this.modalController.create(AreaConstruidaCreatePage, this.data[index], config);
      modal.onDidDismiss(data => {
        if(data) {
          console.log("Return OK", data);
          this.data[index] = data;
        } else {
          console.log("Vacio");
        }
      });
      modal.present();
    } else {
      const alert = this.alertCtrl.create({
        title: 'Lo sentimos',
        subTitle: 'Para ir al menu de calificaciones debe seleccionar un uso para el área construida',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }

  saveData() {
    console.log("save data", this.data);
    this.view.dismiss(this.data);
  }
}
