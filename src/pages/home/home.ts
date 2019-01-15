import { LoginServicioProvider } from "../../providers/login-servicio/login-servicio";
import { VarGlobalesProvider } from "../../providers/var-globales/var-globales";
import { Component, ViewChild } from "@angular/core";

import { GraficasProvider } from "../../providers/graficas/graficas";

import { NavController, LoadingController, Loading,AlertController } from "ionic-angular";

import chartJs from "chart.js";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public usuario: string;
  public idUsuario: number;
  public imgPerfil: string;
  public label: any;
  public datospt: any;
  public datosgrasa: any;
  public datosmuscular: any;
  public datosmagrar: any;
  public colores: any;

  loading: Loading;

  @ViewChild("pesoTotal") pesoTotal;
  @ViewChild("masaGrasa") masaGrasa;
  @ViewChild("masaMuscular") masaMuscular;
  @ViewChild("masaMagra") masaMagra;

  constructor(
    public navCtrl: NavController,
    public authx: LoginServicioProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public graficasProvider: GraficasProvider,
    public varGlobal: VarGlobalesProvider
  ) {
    this.idUsuario = authx.currentUser.idempleado;
    this.usuario = authx.currentUser.name;
    this.imgPerfil = varGlobal.imgPerfil;

    this.graficaPesoTotal(1,this.idUsuario);
  }

  public graficaPesoTotal(tipo: number,idCliente:number) {
    this.showLoading();

    this.graficasProvider
      .grafica(tipo,idCliente)
      .then(data => {
        var resultado = Object.keys(data).length;
        if (resultado != 0) {

          this.label = data[0]["label"];
          this.datospt = data[0]["pt"];
          this.datosgrasa = data[0]["grasa"];
          this.datosmuscular = data[0]["muscular"];
          this.datosmagrar = data[0]["magra"];
          this.colores = data[0]["color"];


        } else {
          this.showError("No existe el usuario");
        }
      })
      .catch(error => {
        this.showError(error);
      });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.pesoTotal = this.getBarChart();
      this.masaGrasa = this.getGrasa();
      this.masaMuscular = this.getMuscular();
      this.masaMagra = this.getMagra();
      // this.lineChart = this.getLineChart();
    }, 150);
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    });
  }
  getMuscular() {
    const data = {
      labels: this.label,
      datasets: [
        {
          label: "MASA MUSCULAR",
          data: this.datosmuscular,
          backgroundColor: this.colores,
          borderWidth: 1
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return this.getChart(this.masaMuscular.nativeElement, "bar", data, options);
  }
  getMagra() {
    console.log(this.datosmagrar);
    
    const data = {
      labels: this.label,
      datasets: [
        {
          label: "MASA MAGRA",
          data: this.datosmagrar,
          backgroundColor: this.colores,
          borderWidth: 1
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return this.getChart(this.masaMagra.nativeElement, "bar", data, options);
  }

  getGrasa() {
    const data = {
      labels: this.label,
      datasets: [
        {
          label: "MASA GRASA",
          data: this.datosgrasa,
          backgroundColor: this.colores,
          borderWidth: 1
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return this.getChart(this.masaGrasa.nativeElement, "bar", data, options);
  }

  getBarChart() {


    
    const data = {
      labels: this.label,
      datasets: [
        {
          label: "Peso total",
          data: this.datospt,
          backgroundColor: this.colores,
          borderWidth: 1
        }
      ]
    };

    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    };

    return this.getChart(this.pesoTotal.nativeElement, "bar", data, options);
  }

  // getLineChart(){
  //   const data = {
  //     labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
  //     datasets: [{
  //       label: 'Meu Dataset',
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgb(0, 178, 255)',
  //       borderColor: 'rgb(231, 205, 35)',
  //       borderCapStyle: 'butt',
  //       borderJoinStyle: 'miter',
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data:[20, 15, 98, 4],
  //       scanGaps: false,
  //     }, {
  //       label: 'Meu segundo Dataset',
  //       fill: false,
  //       lineTension: 0.1,
  //       backgroundColor: 'rgb(117, 0, 49)',
  //       borderColor: 'rgb(51, 50, 46)',
  //       borderCapStyle: 'butt',
  //       borderJoinStyle: 'miter',
  //       pointRadius: 1,
  //       pointHitRadius: 10,
  //       data:[29, 135, 13, 70],
  //       scanGaps: false,
  //     }
  //   ]
  //   }

  //   return this.getChart(this.lineCanvas.nativeElement, 'line', data)
  // }



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
}
