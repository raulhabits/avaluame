import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalificacionPage } from '../calificacion/calificacion';
import { DatosBasicosPage } from '../datos-basicos/datos-basicos';
import { DatosFisicosPage } from '../datos-fisicos/datos-fisicos';
import { GeoPositionPage } from '../geo-position/geo-position';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  calificacionPage = CalificacionPage;
  datosBasicosPage = DatosBasicosPage;
  datosFisicosPage = DatosFisicosPage;
  geoPositionPage = GeoPositionPage;
  
  constructor(public navCtrl: NavController) {

  }


}
