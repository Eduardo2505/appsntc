import { Component } from "@angular/core";
import { PlanAlimenticioProvider } from "../../providers/plan-alimenticio/plan-alimenticio";
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";
import { PgrupoPage } from "../pgrupo/pgrupo";
/**
 * Generated class for the ComidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-comidas",
  templateUrl: "comidas.html"
})
export class ComidasPage {
  loading: Loading;

  idplanAlimentacion: number;
  idConsulta: number;
  op:string;
  public registros: any = [];

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public planAlimenticioProvider: PlanAlimenticioProvider,
    public navParams: NavParams
  ) {
    this.idplanAlimentacion = this.navParams.get("idplanAlimentacion");
    this.idConsulta = this.navParams.get("idConsulta");
    // console.log(this.idplanAlimentacion);
    // console.log(this.idConsulta);
    
    this.op="op1";

    this.getComidas(this.idConsulta, this.idplanAlimentacion);
  }

  getComidas(idConsulta:number,idplan:number) {
    return new Promise(resolve => {
      this.planAlimenticioProvider.getComidas(idConsulta,idplan).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ComidasPage");
  }

  grupos(idcomidas:number) {
    this.showLoading();
    this.navCtrl.push(PgrupoPage,{ idComida: idcomidas,idplanAlimentacion:this.idplanAlimentacion });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Cargando datos...",
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
