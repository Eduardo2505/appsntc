import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import{GmuscularPage} from '../gmuscular/gmuscular';

/**
 * Generated class for the PentrenamientoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pentrenamiento',
  templateUrl: 'pentrenamiento.html',
})
export class PentrenamientoPage {

  loading: Loading;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PgrupoPage');
  }


  grupo() {
    this.showLoading();
    this.navCtrl.push(GmuscularPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
