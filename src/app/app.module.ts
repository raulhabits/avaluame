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
import { AvaluoService } from '../models/avaluo';
import { AreaConstruidaPage } from '../pages/area-construida/area-construida';
import { AreaConstruidaCreatePage } from '../pages/area-construida-create/area-construida-create';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { FileOpener } from '@ionic-native/file-opener';
import { LoadPdfProvider } from '../providers/load-pdf/load-pdf';
import { DocumentViewer } from '@ionic-native/document-viewer';
import {  HttpClientModule } from '@angular/common/http';
import { InformacionJuridicaPage } from '../pages/informacion-juridica/informacion-juridica';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CalificacionPage,
    DatosBasicosPage,
    DatosFisicosPage,
    AreaConstruidaPage,
    AreaConstruidaCreatePage,
    GeoPositionPage,
    InformacionJuridicaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CalificacionPage,
    DatosBasicosPage,
    DatosFisicosPage,
    AreaConstruidaPage,
    AreaConstruidaCreatePage,
    GeoPositionPage,
    InformacionJuridicaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ItemListService,
    AvaluoService,
    DocumentViewer,
    LoadPdfProvider,
    Geolocation,
    Camera,
    File,
    FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoadPdfProvider
  ]
})
export class AppModule {}
