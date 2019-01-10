import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import{SemanaPage} from '../semana/semana';
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento'
import { LoginServicioProvider } from "../../providers/login-servicio/login-servicio";

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
  op: string = "";
  idConsulta: number;
  public registros: any = [];

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public authx: LoginServicioProvider,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public navParams: NavParams) {

      this.idConsulta = authx.currentUser.idConsulta;
      this.op = "op1";
      this.getPlanAlimenticio(this.idConsulta);
  }

  getPlanAlimenticio(idConsulta:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getPlanes(idConsulta).then(data => {
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

 

  grupo(idplanEntranamiento:number) {
    this.showLoading();
    this.navCtrl.push(SemanaPage,{ idplanEntranamiento: idplanEntranamiento,idConsulta:this.idConsulta });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando datos...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
