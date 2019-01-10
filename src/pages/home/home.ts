
import { LoginServicioProvider } from '../../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../../providers/var-globales/var-globales';
import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import chartJs from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public usuario: string;
  public idUsuario: number;
  public imgPerfil: string;

  @ViewChild('pesoTotal') pesoTotal;
  @ViewChild('masaGrasa') masaGrasa;
  @ViewChild('masaMuscular') masaMuscular;
  @ViewChild('masaMagra') masaMagra;


 


  constructor(public navCtrl: NavController,
    public authx: LoginServicioProvider,
      public varGlobal: VarGlobalesProvider) {
      this.idUsuario = authx.currentUser.idempleado;
      this.usuario=authx.currentUser.name;
      this.imgPerfil=varGlobal.imgPerfil;

  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.pesoTotal = this.getBarChart();
      this.masaGrasa = this.getGrasa();
      this.masaMuscular = this.getMuscular();
      this.masaMagra = this.getMagra();
     // this.lineChart = this.getLineChart();
    }, 150)
    
  }

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType
    })
  }
  getMuscular(){
    const data = {
      labels: ['Consulta 1 '],
      datasets: [{
        label: 'MASA MUSCULAR',
        data: [98.6],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.masaMuscular.nativeElement, 'bar', data, options);
  }
  getMagra(){
    const data = {
      labels: ['Consulta 1 '],
      datasets: [{
        label: 'MASA MAGRA',
        data: [98.6],
        backgroundColor: [
          'rgb(255, 0, 0)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.masaMagra.nativeElement, 'bar', data, options);
  }

  getGrasa(){
    const data = {
      labels: ['Consulta 1 '],
      datasets: [{
        label: 'MASA GRASA',
        data: [12.6],
        backgroundColor: [
          'rgb(255, 0, 0)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.masaGrasa.nativeElement, 'bar', data, options);
  }


  getBarChart(){
    const data = {
      labels: ['Consulta 1 '],
      datasets: [{
        label: 'Peso total',
        data: [70],
        backgroundColor: [
          'rgb(255, 0, 0)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.pesoTotal.nativeElement, 'bar', data, options);
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

  // getPieChart(){
  //   const data = {
  //     labels: ['Vermelho', 'Azul', 'Amarelo'],
  //     datasets: [{
  //       data: [300, 75, 224],
  //       backgroundColor: ['rgb(200, 6, 0)', 'rgb(36, 0, 255)', 'rgb(242, 255, 0)']
  //     }]
  //   }

  //   return this.getChart(this.pieCanvas.nativeElement, 'pie', data);
  // }

  // getDoughnutChart(){
  //   const data = {
  //     labels: ['Vermelho', 'Azul', 'Amarelo'],
  //     datasets: [{
  //       label: 'Teste Chart',
  //       data: [12, 65, 32],
  //       backgroundColor: [
  //         'rgb(0, 244, 97)',
  //         'rgb(37, 39, 43)',
  //         'rgb(255, 207, 0)'
  //       ]
  //     }]
  //   }

  //   return this.getChart(this.doughnutCanvas.nativeElement, 'doughnut', data);
  // }


}
