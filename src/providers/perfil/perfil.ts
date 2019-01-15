import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core"
import { VarGlobalesProvider } from "../var-globales/var-globales";

/*
  Generated class for the PerfilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilProvider {

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


  getCliente(idCliente:number) {    
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appusuario/getCliente?idCliente="+idCliente)
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
