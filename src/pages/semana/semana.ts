import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento'

import {MicroactivdadesPage} from '../microactivdades/microactivdades';
import {EjerciciosPage} from '../ejercicios/ejercicios';

/**
 * Generated class for the SemanaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-semana',
  templateUrl: 'semana.html',
})
export class SemanaPage {

  idplanEntranamiento: number;
  idConsulta: number;
  op:string;
  public registros: any = [];
  public registrosg: any = [];
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public loadingCtrl: LoadingController) {

      this.idplanEntranamiento = this.navParams.get("idplanEntranamiento");
      this.idConsulta = this.navParams.get("idConsulta");
      // console.log(this.idplanAlimentacion);
      // console.log(this.idConsulta);
      
      this.op="op1";
  
      this.getSemanas(this.idplanEntranamiento);
      this.getgrupos(this.idplanEntranamiento);
  }

  getgrupos(idplan:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getgrupos(idplan).then(data => {
        for (let res of data) {
          this.registrosg.push(res);
        }

        resolve(true);
      });
    });
  }


  getSemanas(idplan:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getSemanas(idplan).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  micro(idc_dia_semana:number) {
  
    
    this.showLoading();
    this.navCtrl.push(MicroactivdadesPage,{ idc_dia_semana: idc_dia_semana,idplanEntranamiento:this.idplanEntranamiento });
  }

  ejericios(idgrupo_plan:number) {

    
    this.showLoading();
    this.navCtrl.push(EjerciciosPage,{ idgrupo_plan: idgrupo_plan });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SemanaPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
