import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import {EjerciciosPage} from '../ejercicios/ejercicios';

/**
 * Generated class for the GmuscularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gmuscular',
  templateUrl: 'gmuscular.html',
})
export class GmuscularPage {

  loading: Loading;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PgrupoPage');
  }


  ejercicios() {
    this.showLoading();
    this.navCtrl.push(EjerciciosPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
