import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Loading, LoadingController } from 'ionic-angular';
import { PgrupoPage } from '../pgrupo/pgrupo';
/**
 * Generated class for the ComidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comidas',
  templateUrl: 'comidas.html',
})
export class ComidasPage {
  loading: Loading;

  constructor(public navCtrl: NavController, 
    public loadingCtrl: LoadingController ,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidasPage');
  }

  grupos() {
    this.showLoading();
   this.navCtrl.push(PgrupoPage);
 }

 showLoading() {
  this.loading = this.loadingCtrl.create({
    content: 'Cargando datos...',
    dismissOnPageChange: true
  });
  this.loading.present();
}

}
