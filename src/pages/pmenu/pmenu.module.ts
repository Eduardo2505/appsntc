import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PmenuPage } from './pmenu';

@NgModule({
  declarations: [
    PmenuPage,
  ],
  imports: [
    IonicPageModule.forChild(PmenuPage),
  ],
})
export class PmenuPageModule {}
