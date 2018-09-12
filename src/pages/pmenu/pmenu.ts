import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { ComidasPage } from '../comidas/comidas';

/**
 * Generated class for the PmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pmenu',
  templateUrl: 'pmenu.html',
})
export class PmenuPage {
  loading: Loading;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController ,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PmenuPage');
  }

  comidas() {
    this.showLoading();
   this.navCtrl.push(ComidasPage);
 }

 showLoading() {
  this.loading = this.loadingCtrl.create({
    content: 'Cargando datos...',
    dismissOnPageChange: true
  });
  this.loading.present();
}

}
