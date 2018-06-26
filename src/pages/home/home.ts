import { Component } from '@angular/core';
import { NavController, ModalController, ModalOptions, Modal } from 'ionic-angular';
import { CalificacionPage } from '../calificacion/calificacion';
import { DatosBasicosPage } from '../datos-basicos/datos-basicos';
import { DatosFisicosPage } from '../datos-fisicos/datos-fisicos';
import { GeoPositionPage } from '../geo-position/geo-position';
import { AvaluoService, DatosGeoreferenciacion } from '../../models/avaluo';
import { AreaConstruidaPage } from '../area-construida/area-construida';
import { Geolocation } from '@ionic-native/geolocation';
import { LoadPdfProvider } from '../../providers/load-pdf/load-pdf';
import { InformacionJuridicaPage } from '../informacion-juridica/informacion-juridica';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[AvaluoService, LoadPdfProvider]
})
export class HomePage {

  calificacionPage = CalificacionPage;
  datosBasicosPage = DatosBasicosPage;
  datosFisicosPage = DatosFisicosPage;
  areaConstruidaPage = AreaConstruidaPage;
  informacionJuridicaPage = InformacionJuridicaPage;
  geoPositionPage = GeoPositionPage;
  
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public avaluoService: AvaluoService, public modalController: ModalController, private geolocation: Geolocation, public loadPdf: LoadPdfProvider) {
    this.geolocation.getCurrentPosition({maximumAge: 30}).then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude =  resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  loadPage(page: any, field: string) {
    
    console.log("Lanzando page ", page, field);

    let config: ModalOptions = {
      enableBackdropDismiss:true
    };
    let modal: Modal = this.modalController.create(page, this.avaluoService.getAvaluo()[field], config);
    modal.onDidDismiss(data => {
      if(data) {
        console.log(data);
        this.avaluoService.getAvaluo()[field] = data;
      }
    });
    modal.present();
  }

  loadGeolocationPage() {
    console.log("Lanzando Geolocation page ");

    let config: ModalOptions = {
      enableBackdropDismiss:true
    };

    let modal: Modal = this.modalController.create(this.geoPositionPage, this.setupDatosGeoreferenciacion(), config);
    modal.onDidDismiss(data => {
      if(data) {
        console.log(data);
        this.avaluoService.getAvaluo().geoLocationData = data;
      }
    });
    modal.present();
  }

  setupDatosGeoreferenciacion(): DatosGeoreferenciacion {
    if(this.avaluoService.getAvaluo().geoLocationData.exists) {
      return this.avaluoService.getAvaluo().geoLocationData;
    }

    this.avaluoService.getAvaluo().geoLocationData.centerLatitude = this.latitude ? this.latitude : 0;
    this.avaluoService.getAvaluo().geoLocationData.centerLongitude = this.longitude ? this.longitude : 0;
    this.avaluoService.getAvaluo().geoLocationData.latitude = this.latitude ? this.latitude : 0;
    this.avaluoService.getAvaluo().geoLocationData.longitude = this.longitude ? this.longitude : 0;
    this.avaluoService.getAvaluo().geoLocationData.zoom = 10;

    return this.avaluoService.getAvaluo().geoLocationData;
  }
 loadResultadoPage(){
   this.loadPdf.createPdfV2(this.avaluoService.getAvaluo());
 }


}


//cordova.system.library.2=com.android.support:support-v4:27.1.0