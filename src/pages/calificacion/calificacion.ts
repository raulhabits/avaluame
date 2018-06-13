import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { SubTypes, Usages, Types, Item, ItemEnumType } from '../../models/rates/item';
import { ItemListService } from '../../models/rates/rate-list';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the CalificacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calificacion',
  templateUrl: 'calificacion.html',
  providers: [ItemListService, Camera]
})
export class CalificacionPage {

  subtypes: Set<ItemEnumType>;
  items: Item[];
  answer: Map<string, Item> = new Map();
  image: string;
  loader: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public itemlistService: ItemListService, public loadingCtrl: LoadingController) {
    this.subtypes = itemlistService.getSubtypeRates(Usages.RESIDENCIAL, Types.ESTRUCTURA);
    this.items = itemlistService.getRatesByUsageAndType(Usages.RESIDENCIAL, Types.ESTRUCTURA);

    this.subtypes.forEach(subtype => {
      this.answer.set(subtype.propName, null);
    });
    console.log(this.answer);
  }


  onLoad() {
    this.loader.dismiss();
  }


  getItemsBySubtype(subtype: ItemEnumType): Item[] {
    return this.items.filter(item => item.subtype == subtype);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificacionConstruccionEstructuraPage');
  }

  saveData() {
    console.log(this.answer);
  }

  takePicture() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.loader = this.loadingCtrl.create();
    this.loader.present();

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;

    }, (err) => {
      // Handle error

      this.loader.dismiss();
      console.log("Error tomando la foto")
    });
  }


  selectProperty(subtype: ItemEnumType, item: Item) {
    this.answer.set(subtype.propName, item);
    console.log(subtype);
    console.log(item);
    console.log(this.answer);
  }


}
