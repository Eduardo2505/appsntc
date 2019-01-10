import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolumenesPage } from './volumenes';

@NgModule({
  declarations: [
    VolumenesPage,
  ],
  imports: [
    IonicPageModule.forChild(VolumenesPage),
  ],
})
export class VolumenesPageModule {}
