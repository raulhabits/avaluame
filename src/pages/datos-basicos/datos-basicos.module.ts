import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatosBasicosPage } from './datos-basicos';

@NgModule({
  declarations: [
    DatosBasicosPage,
  ],
  imports: [
    IonicPageModule.forChild(DatosBasicosPage),
  ],
})
export class DatosBasicosPageModule {}
