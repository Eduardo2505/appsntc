
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import {PlanEntrenamientoProvider} from '../../providers/plan-entrenamiento/plan-entrenamiento';
/**
 * Generated class for the VolumenesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volumenes',
  templateUrl: 'volumenes.html',
})
export class VolumenesPage {

  idserie: number;
  nombre:string;

  public registros: any = [];
  loading: Loading;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planEntrenamientoProvider: PlanEntrenamientoProvider,
    public loadingCtrl: LoadingController) {

      this.idserie = this.navParams.get("idserie");
      this.nombre = this.navParams.get("nombre");
  
      this.getVolumenIntensidad(this.idserie);
  }


  getVolumenIntensidad(idserie:number) {
    return new Promise(resolve => {
      this.planEntrenamientoProvider.getVolumenIntensidad(idserie).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }


  

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolumenesPage');
  }

}
