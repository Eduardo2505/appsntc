import { Component } from "@angular/core";

import { IonicPage,NavController, LoadingController, Loading,AlertController ,NavParams,ViewController} from "ionic-angular";
import { LoginServicioProvider } from "../../providers/login-servicio/login-servicio";
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';

import { PerfilProvider } from "../../providers/perfil/perfil";
/**
 * Generated class for the PerfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html"
})
export class PerfilPage {
  public logo: string;
  public nombre: string;
  public genero: string;
  public fechanacimiento: string;
  public telefono: string;
  
  public email: string;
  public idempleado: number;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public varGlobal: VarGlobalesProvider,
    public loadingCtrl: LoadingController,
    public authx: LoginServicioProvider,
    public alertCtrl: AlertController,
    public perfilProvider: PerfilProvider
  ) {
    this.logo = varGlobal.logo;
    this.idempleado = authx.currentUser.idempleado;   
    this.getCliente();

  }

  public getCliente() {
    this.showLoading();

    this.perfilProvider
      .getCliente(this.idempleado)
      .then(data => {
        var resultado = Object.keys(data).length;
        if (resultado != 0) {
          this.nombre=data[0]["nombre"];
          this.genero=data[0]["genero"];
          this.fechanacimiento=data[0]["fecha_nacimento"];
          this.telefono=data[0]["telefono"];          
          this.email=data[0]["email"];
        } else {
          this.showError("No existe el usuario");
        }
      })
      .catch(error => {
        this.showError(error);
      });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Se esta verificando",
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: "Error",
      subTitle: text,
      buttons: ["OK"]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad PerfilPage");
    this.viewCtrl.showBackButton(false);
  }
}
