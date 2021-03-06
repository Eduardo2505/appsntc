import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import {PlanesconProvider} from '../../providers/planescon/planescon';
/**
 * Generated class for the ConsultasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultas',
  templateUrl: 'consultas.html',
})
export class ConsultasPage {

  idempleado: number;
  idConsulta: number;
  idplancontratado:number;
  public registros: any = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public planesconProvider : PlanesconProvider,
    public authx: LoginServicioProvider) {
    this.idempleado = authx.currentUser.idempleado;
    this.idConsulta = authx.currentUser.idConsulta;
    this.idplancontratado = this.navParams.get('idplancontratado');
    console.log("id empleado "+this.idempleado );
    console.log(this.idConsulta);
    console.log("id pla "+ this.idplancontratado);    
    this.getConsultas(this.idplancontratado);
    
    
  }

  getConsultas(idplancontratado) {
  
    return new Promise(resolve => {

      this.planesconProvider.getConsultas(idplancontratado)
        .then(data => {

          for (let res of data) {
            this.registros.push(res);
          }

          resolve(true);

        });

    });

  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultasPage');
  }

}
