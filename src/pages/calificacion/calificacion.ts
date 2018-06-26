import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ViewController } from 'ionic-angular';
import { SubType, Usage, OptionItem, Option } from '../../models/rates/item';
import { ItemListService } from '../../models/rates/rate-list';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { InformacionAdicionalAreaConstruida } from '../../models/avaluo';

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

  subtypes: Set<string>;
  type: string;
  items: OptionItem[];
  answer:  any = {};
  data: InformacionAdicionalAreaConstruida;
  image: string;
  loader: Loading;
  subtypeEnumValues = SubType;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public camera: Camera, public itemlistService: ItemListService, public loadingCtrl: LoadingController) {
    this.data = navParams.data.data;
    this.type = navParams.data.type;
    this.subtypes = itemlistService.getSubtypeRates(this.data.usage, this.type);
    this.items = itemlistService.getRatesByUsageAndType(this.data.usage, this.type);
    if(this.data.images.has(this.type)) {
      this.image = this.data.images.get(this.type);
    }
    
    this.answer = {};
    this.data.rates.forEach(element => {
      console.log("elemento", element);
      this.answer[element.subtype] =  element;
    });;
    console.log(this);
  }

  onLoad() {
    this.loader.dismiss();
  }

  getItemsBySubtype(subtype: string): OptionItem[] {
    return this.items.filter(item => item.subtype == subtype);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalificacionConstruccionEstructuraPage');
  }

  saveData() {
    console.log("save data", this.data);
    this.data.images.set(this.type, this.image);
    this.view.dismiss(this.data);
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
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = base64Image;

    }, (err) => {
      this.loader.dismiss();
      console.log("Error tomando la foto")
    });
  }

  isOptionSelected(item: OptionItem): boolean {
    let pos = -1;
    this.data.rates.forEach((element: OptionItem, index: number) => {
      if (element.usage ===  this.data.usage && 
        element.type === this.type && 
        element.subtype === item.subtype && 
        element.option === item.option) {
        pos = index;
        console.log("selected", item, element);
      }
    });
    return pos !== -1;
  }

  selectProperty(subtype: string, item: OptionItem) {
    this.answer[subtype] =  item;
    let pos = -1;
    console.log(this.type, subtype, item);
    this.data.rates.forEach((element: OptionItem, index: number) => {
      console.log(element);
      if(element.usage ===  this.data.usage && element.type === this.type && element.subtype === item.subtype) {
        console.log("Encontro", element);
        pos = index;
      }
    });
    if(pos != -1) {
      this.data.rates.splice(pos, 1);
    }
    this.data.rates.push(item);
    console.log(this);
  }


}
