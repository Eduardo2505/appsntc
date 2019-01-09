import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { PlanAlimenticioProvider } from "../../providers/plan-alimenticio/plan-alimenticio";

/**
 * Generated class for the AlimentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alimentos',
  templateUrl: 'alimentos.html',
})
export class AlimentosPage {

  idComida: number;
  idtipo: number;
  op:string;
  public registros: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public planAlimenticioProvider: PlanAlimenticioProvider) {

    this.idtipo = this.navParams.get("idtipo");
    this.idComida = this.navParams.get("idComida");
    console.log(this.idtipo);
    console.log(this.idComida);
    

    this.getAlimentos(this.idComida, this.idtipo);
  }


  getAlimentos(idComida:number,idtipo:number) {
    return new Promise(resolve => {
      this.planAlimenticioProvider.getAlimentos(idComida,idtipo).then(data => {
        for (let res of data) {
          this.registros.push(res);
        }

        resolve(true);
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlimentosPage');
  }

}
