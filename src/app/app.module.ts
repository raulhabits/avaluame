import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalificacionPage } from '../pages/calificacion/calificacion';
import { DatosBasicosPage } from '../pages/datos-basicos/datos-basicos';
import { DatosFisicosPage } from '../pages/datos-fisicos/datos-fisicos';
import { GeoPositionPage } from '../pages/geo-position/geo-position';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ItemListService } from '../models/rates/rate-list';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CalificacionPage,
    DatosBasicosPage,
    DatosFisicosPage,
    GeoPositionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2WBU0zgzptHX8-XSeWJIchalFbkCuHT0'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CalificacionPage,
    DatosBasicosPage,
    DatosFisicosPage,
    GeoPositionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
