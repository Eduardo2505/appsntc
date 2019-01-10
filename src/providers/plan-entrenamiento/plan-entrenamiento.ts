import { Http, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";

import { VarGlobalesProvider } from "../var-globales/var-globales";
/*

/*
  Generated class for the PlanEntrenamientoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlanEntrenamientoProvider {

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


  getPlanes(idConsulta: number) {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getPlanes?idconsulta=" + idConsulta)
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

  getSemanas(idplan:number) {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getSemanas?idplanEntranamiento=" + idplan)
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

  getMicrotipoactividad(idplan:number,idc_dia_semana:number)  {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getMicrotipoactividad?idplanEntranamiento=" + idplan+"&idc_dia_semana="+idc_dia_semana)
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


  getgrupos(idplan:number)  {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getgrupos?idplanEntranamiento=" + idplan)
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


  
  getEntrenamiento(idgrupo_plan:number)  {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getEntrenamiento?idgrupo_plan=" + idgrupo_plan)
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

  getSeries(idejercicios_gplan:number)  {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getSeries?idejercicios_gplan=" + idejercicios_gplan)
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

  getVolumenIntensidad(idserie:number)  {
    //console.log(this.url + "/app/appentrenamiento?idConsulta=" + idConsulta);
    
    return new Promise<any>(resolve => {
      this.http
        .get(this.url + "/appentrenamiento/getVolumenIntensidad?idserie=" + idserie)
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
