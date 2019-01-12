import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { VarGlobalesProvider } from "../var-globales/var-globales";

/*
  Generated class for the GraficasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GraficasProvider {

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



  grafica(tipo: number,idCliente:number) {    
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appevolucion/graficas?tipo=" + tipo+"&idCliente="+idCliente)
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
