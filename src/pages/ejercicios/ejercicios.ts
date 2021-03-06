import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento'
import {SeriesPage} from '../series/series';

/**
 * Generated class for the EjerciciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {
  idgrupo_plan: number;

  public registros: any = [];
  loading: Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public loadingCtrl: LoadingController) {

      this.idgrupo_plan = this.navParams.get("idgrupo_plan");
  
      this.getEntrenamiento(this.idgrupo_plan);
  }


  getEntrenamiento(idgrupo_plan:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getEntrenamiento(idgrupo_plan).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  series(idejercicios_gplan:number,nombre:string) {
    this.showLoading();
    this.navCtrl.push(SeriesPage,{ idejercicios_gplan: idejercicios_gplan,nombre:nombre });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ejercicio');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
