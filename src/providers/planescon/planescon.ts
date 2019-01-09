import { Http,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { VarGlobalesProvider } from '../var-globales/var-globales';
/*
  Generated class for the PlanesconProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanesconProvider {
  private url: string;
  private headers :Headers;
  constructor(public http: Http, public varGlobal: VarGlobalesProvider) {
    console.log('Hello PlanesconProvider Provider');
    this.url = varGlobal.ulr;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  
  }

  getPlanes(idCliente) {

        return new Promise<any>(    
          resolve => {
            this.http.get(this.url + "/appevolucion/getPlanes?idCliente=" +idCliente)
              .map(res => res.json())
              .subscribe(
              data => {
                resolve(data);
              },
              err => {
                console.log(err);
              }
              )
          }
        );
      }

      
      getConsultas(idplancontratado) {

    return new Promise<any>(    
      resolve => {
        this.http.get(this.url + "/appevolucion/getConsultas?idplancontratado=" +idplancontratado)
          .map(res => res.json())
          .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
          )
      }
    );
  }

}
