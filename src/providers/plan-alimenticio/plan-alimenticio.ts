import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { VarGlobalesProvider } from "../var-globales/var-globales";
/*
  Generated class for the PlanAlimenticioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanAlimenticioProvider {
  private url: string;
  private headers: Headers;
  constructor(public http: Http, public varGlobal: VarGlobalesProvider) {
    console.log("Hello PlanesconProvider Provider");
    this.url = varGlobal.ulr;
    this.headers = new Headers();
    this.headers.append(
      "Content-Type",
      "application/x-www-form-urlencoded; charset=UTF-8"
    );
  }

  getPlanAlimenticio(idConsulta: number) {
    console.log(this.url + "/app/getPlanAlimenticio?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/app/getPlanAlimenticio?idConsulta=" + idConsulta)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  getComidas(idConsulta:number,idplan:number) {

     console.log(this.url + "/app/getComidas?idplan="+idplan+"&idConsulta="+ idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/app/getComidas?idplan="+idplan+"&idConsulta="+ idConsulta)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

  getGrupos(idComida:number,idplan:number) {
    console.log(this.url + "/app/getGrupos?idplan="+idplan+"&idComida="+ idComida);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/app/getGrupos?idplan="+idplan+"&idComida="+ idComida)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }


  getAlimentos(idComida:number,idtipo:number) {

    console.log(this.url + "/app/getAlimentos?idtipo="+idtipo+"&idComida="+ idComida);
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/app/getAlimentos?idtipo="+idtipo+"&idComida="+ idComida)
        .map(res => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    });
  }

}
