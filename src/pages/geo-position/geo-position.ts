import { Component, Renderer, Sanitizer } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, ViewController } from 'ionic-angular';
import { MouseEvent, LatLngLiteral } from '@agm/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { DatosGeoreferenciacion } from '../../models/avaluo';
import { HttpClient } from '@angular/common/http';
import { FileReader } from '@ionic-native/file';
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
  providers:[HttpClient]
})
export class GeoPositionPage {
  // google maps zoom level
  zoom: number = 8;
  mapType: string = 'roadmap'; //"roadmap" | "hybrid" | "satellite" | "terrain";
  lat: number;
  lng: number;
  center = {};
  currentPoint = { };

  img: any;
  loader: Loading;
  width: number;
  height: number;
  base64;

  data:  DatosGeoreferenciacion = new DatosGeoreferenciacion();

  constructor(public navCtrl: NavController, public navParams: NavParams, public sanitizer: Sanitizer, public loadingCtrl: LoadingController, public view: ViewController, public httpClient: HttpClient) {
    this.data = navParams.data;
    this.lat = this.data.centerLatitude;
    this.lng = this.data.centerLongitude;
    this.center["lat"] = this.data.centerLatitude;
    this.center["lng"] = this.data.centerLongitude;
    this.currentPoint["lat"] = this.data.latitude;
    this.currentPoint["lng"] = this.data.longitude;
    this.img = this.data.image;
    this.zoom = this.data.zoom;
    this.width = this.data.width;
    this.height = this.data.height;
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
  let url = 'https://maps.googleapis.com/maps/api/staticmap?key=&size=' + width + 'x' + height + '&center=' + this.center["lat"] + ',' + this.center["lng"]+ '&zoom=' + this.zoom + '&markers=%7C' + this.currentPoint["lat"] + ',' + this.currentPoint["lng"];
  this.img = null;
  this.httpClient.get(url, {responseType:'arraybuffer'}).subscribe((arrayBuffer) => {
    var image   = new Image();
    var canvas  = document.createElement('canvas');
    var context = canvas.getContext('2d');
    this.img = 'data:image/png;base64,' + btoa(String.fromCharCode.apply(null, new Uint8Array(arrayBuffer)));
    console.log(this.img);
  });
 }


  onLoad() {
    if(this.loader) {
      this.loader.dismiss();
    }
  }

  saveData() {
    this.data.centerLatitude = this.center["lat"];
    this.data.centerLongitude = this.center["lng"];
    this.data.latitude = this.currentPoint["lat"];
    this.data.longitude = this.currentPoint["lng"];
    this.data.exists = true;
    this.data.zoom = this.zoom;
    this.data.image = this.img;
    this.data.width = this.width;
    this.data.height = this.height;
    this.view.dismiss(this.data);
  }
}

