import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, ViewController, ModalOptions, Modal, ModalController, AlertController } from 'ionic-angular';
import { ItemListService } from '../../models/rates/rate-list';
import { Type, OptionItem } from '../../models/rates/item';
import { InformacionAdicionalAreaConstruida } from '../../models/avaluo';
import { CalificacionPage } from '../calificacion/calificacion';

/**
 * Generated class for the AreaConstruidaCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-area-construida-create',
  templateUrl: 'area-construida-create.html',
  providers: [ItemListService]
})
export class AreaConstruidaCreatePage {
  types: Set<Type>;
  data: InformacionAdicionalAreaConstruida;
  calificacionPage: CalificacionPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public modalController: ModalController, private itemListService: ItemListService, public alertCtrl: AlertController) {
    this.data = navParams.data;
    this.types = itemListService.getTypeByUsage(this.data.usage);
  }

  ratesByType(type: any) : OptionItem[] {
    console.log("type",type);
    return this.data.rates.filter(item => item.type === type);
  }
  
  fillRateByUsageAndType(type: string) {
    console.log(this);
    let config: ModalOptions = {
      enableBackdropDismiss:true
    };
    let modal: Modal = this.modalController.create(CalificacionPage, {data:this.data, type:type}, config);
    modal.onDidDismiss(data => {
      if(data) {
        this.data = data;
      } else {
        console.log("Vacio");
      }
    });
    modal.present();
  }

  saveData() {
    const alert = this.alertCtrl.create({
      title: 'Alerta',
      subTitle: '¿Esta seguro de continuar?',
      buttons: [ {text:'Si', handler: () => {
        console.log("save data", this.data);
        this.view.dismiss(this.data);
      }},
      {
        text:'No'
      }
    ]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaConstruidaCreatePage');
  }

}


