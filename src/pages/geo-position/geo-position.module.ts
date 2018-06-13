import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeoPositionPage } from './geo-position';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    GeoPositionPage,
  ],
  imports: [
    IonicPageModule.forChild(GeoPositionPage),,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyC2WBU0zgzptHX8-XSeWJIchalFbkCuHT0'})
  ]
})
export class GeoPositionPageModule {}
