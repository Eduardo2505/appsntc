import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import {PlanesconProvider} from '../../providers/planescon/planescon';
import {ConsultasPage} from '../consultas/consultas';

/**
 * Generated class for the PlancPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planc',
  templateUrl: 'planc.html',
})
export class PlancPage {

  idempleado: number;
  idConsulta: number;
  public registros: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public planesconProvider : PlanesconProvider,
    public authx: LoginServicioProvider) {
    this.idempleado = authx.currentUser.idempleado;
    this.idConsulta = authx.currentUser.idConsulta;
    console.log("id empleado "+this.idempleado );
    console.log(this.idConsulta);
    this.loadPlanes(this.idempleado);
    
    
  }

  loadPlanes(idCliente) {
  
    return new Promise(resolve => {

      this.planesconProvider.getPlanes(idCliente)
        .then(data => {

          for (let person of data) {
            this.registros.push(person);
          }

          resolve(true);

        });

    });

  }

  verConsultas(idplancontratado) {
    this.navCtrl.push(ConsultasPage, { idplancontratado: idplancontratado });
  }
}


