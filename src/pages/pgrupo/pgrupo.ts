import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AlimentosPage } from '../alimentos/alimentos';

/**
 * Generated class for the PgrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pgrupo',
  templateUrl: 'pgrupo.html',
})
export class PgrupoPage {
  loading: Loading;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PgrupoPage');
  }


  alimentos() {
    this.showLoading();
    this.navCtrl.push(AlimentosPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
