import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AlimentosPage } from '../alimentos/alimentos';

import { PlanAlimenticioProvider } from "../../providers/plan-alimenticio/plan-alimenticio";

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

  idplanAlimentacion: number;
  idComida: number;
  op:string;
  public registros: any = [];
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public planAlimenticioProvider: PlanAlimenticioProvider,
    public navParams: NavParams) {
      this.idplanAlimentacion = this.navParams.get("idplanAlimentacion");
      this.idComida = this.navParams.get("idComida");
      this.op="op1";  
      this.getGrupos(this.idComida, this.idplanAlimentacion);
  }

  
  getGrupos(idComida:number,idplan:number) {
    return new Promise(resolve => {
      this.planAlimenticioProvider.getGrupos(idComida,idplan).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad PgrupoPage');
  }


  alimentos(idtipo:number) {
    this.showLoading();
    this.navCtrl.push(AlimentosPage,{ idtipo: idtipo,idComida:this.idComida });
  //  this.navCtrl.push(AlimentosPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
