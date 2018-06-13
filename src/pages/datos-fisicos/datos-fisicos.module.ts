import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosFisicosPage } from './datos-fisicos';

@NgModule({
  declarations: [
    DatosFisicosPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosFisicosPage),
  ],
})
export class DatosFisicosPageModule {}
