import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlancPage } from './planc';

@NgModule({
  declarations: [
    PlancPage,
  ],
  imports: [
    IonicPageModule.forChild(PlancPage),
  ],
})
export class PlancPageModule {}
