import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: string;
  public idUsuario: number;
  public imgPerfil: string;

  constructor(public navCtrl: NavController,
    public authx: LoginServicioProvider,
      public varGlobal: VarGlobalesProvider) {
      this.idUsuario = authx.currentUser.idempleado;
      this.usuario=authx.currentUser.name;
      this.imgPerfil=varGlobal.imgPerfil;

  }

}
