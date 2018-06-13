import { Component, Renderer, Sanitizer } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { MouseEvent, LatLngLiteral } from '@agm/core';
import { AbstractFormGroup } from '../../models/formulario';
import { FormControl, Validators, FormGroup } from '@angular/forms';
/**
 * Generated class for the GeoPositionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-geo-position',
  templateUrl: 'geo-position.html',
})
export class GeoPositionPage extends AbstractFormGroup {
  // google maps zoom level
  zoom: number = 8;
  // initial center position for the map
  lng: number = -73.9599609375;
  lat: number = 4.702810000949756;
  mapType: string = 'roadmap'; //"roadmap" | "hybrid" | "satellite" | "terrain";
  center: LatLngLiteral = { lat: this.lat, lng: this.lng };

  currentPoint: LatLngLiteral = { lat: this.lat, lng: this.lng };

  img = new FormControl('', Validators.required);
  form: FormGroup;
  loader: Loading;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: Sanitizer, public loadingCtrl: LoadingController) {
    super();

    this.form = new FormGroup({
      'img': this.img
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeoPositionPage');
  }

  centerChange($event: LatLngLiteral) {
    this.center = $event;
  }

  mapClicked($event: MouseEvent) {
    this.currentPoint = {
      lat: $event.coords.lat,
      lng: $event.coords.lng
    };
  }

  zoomChange($event: number) {
    this.zoom = $event;
  }

  takePicture() {
    let width = document.getElementById("mapa").offsetWidth;
    let height = document.getElementById("mapa").offsetHeight;
    let url = 'https://maps.googleapis.com/maps/api/staticmap?size=' + width + 'x' + height + '&center=' + this.center.lat + ',' + this.center.lng + '&zoom=' + this.zoom + '&markers=%7C' + this.currentPoint.lat + ',' + this.currentPoint.lng;
    console.log(url);
    this.img.setValue(url);
    this.loader = this.loadingCtrl.create();
    this.loader.present();
  }

  onLoad() {
    this.loader.dismiss();
  }

  saveData() {
    if (this.form.valid) {
      console.log("Es valido");
    } else {
      console.log("Es invalido");
    }
  }
}

