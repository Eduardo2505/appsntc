import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento'

/**
 * Generated class for the MicroactivdadesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-microactivdades',
  templateUrl: 'microactivdades.html',
})
export class MicroactivdadesPage {

  idplanEntranamiento: number;
  idc_dia_semana: number;
  op:string;
  public registros: any = [];
  loading: Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public loadingCtrl: LoadingController) {

      this.idplanEntranamiento = this.navParams.get("idplanEntranamiento");
      this.idc_dia_semana = this.navParams.get("idc_dia_semana");
      this.op="op1";
      console.log("idplanEntranamiento " +this.idplanEntranamiento);
      console.log("idc_dia_semana " +this.idc_dia_semana);
      
  
      this.getMicrotipoactividad(this.idplanEntranamiento,this.idc_dia_semana);
  }


  getMicrotipoactividad(idplan:number,idc_dia_semana:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getMicrotipoactividad(idplan,idc_dia_semana).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  micro(idc_dia_semana:number) {
    this.showLoading();
   // this.navCtrl.push(MicroactivdadesPage,{ idc_dia_semana: idc_dia_semana,idplanEntranamiento:this.idplanEntranamiento });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MicroactivdadesPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
