import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento';
import {VolumenesPage} from '../volumenes/volumenes';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  idejercicios_gplan: number;
  nombre:string;

  public registros: any = [];
  loading: Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public loadingCtrl: LoadingController) {

      this.idejercicios_gplan = this.navParams.get("idejercicios_gplan");
      this.nombre = this.navParams.get("nombre");
  
      this.getSeries(this.idejercicios_gplan);
  }


  getSeries(idejercicios_gplan:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getSeries(idejercicios_gplan).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  volumenes(idserie:number) {
    this.showLoading();
    console.log("idserie:numberidserie:number" +idserie);
    
    this.navCtrl.push(VolumenesPage,{ idserie: idserie,nombre:this.nombre});
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeriesPage');
  }


}
