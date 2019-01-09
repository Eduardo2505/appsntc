import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import { ComidasPage } from "../comidas/comidas";
import { LoginServicioProvider } from "../../providers/login-servicio/login-servicio";
import { PlanAlimenticioProvider } from "../../providers/plan-alimenticio/plan-alimenticio";

/**
 * Generated class for the PmenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-pmenu",
  templateUrl: "pmenu.html"
})
export class PmenuPage {
  loading: Loading;
  pet: string = "";
  idConsulta: number;
  public registros: any = [];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public authx: LoginServicioProvider,
    public planAlimenticioProvider: PlanAlimenticioProvider,
    public navParams: NavParams
  ) {
    this.idConsulta = authx.currentUser.idConsulta;
    this.pet = "planes";
    //console.log("idconsulta >>> "+this.idConsulta);
    
    this.getPlanAlimenticio(this.idConsulta);
  }

  getPlanAlimenticio(idConsulta:number) {
    return new Promise(resolve => {
      this.planAlimenticioProvider.getPlanAlimenticio(idConsulta).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PmenuPage");
  }

  comidas(idplanAlimentacion:number) {
    this.showLoading();
    this.navCtrl.push(ComidasPage,{ idplanAlimentacion: idplanAlimentacion,idConsulta:this.idConsulta });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
