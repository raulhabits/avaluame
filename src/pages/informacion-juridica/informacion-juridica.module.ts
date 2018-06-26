import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformacionJuridicaPage } from './informacion-juridica';

@NgModule({
  declarations: [
    InformacionJuridicaPage,
  ],
  imports: [
    IonicPageModule.forChild(InformacionJuridicaPage),
  ],
})
export class InformacionJuridicaPageModule {}
