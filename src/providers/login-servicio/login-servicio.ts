import { Injectable } from '@angular/core';
import { Http, URLSearchParams ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { VarGlobalesProvider } from '../var-globales/var-globales';
import { Platform } from 'ionic-angular'
import { Storage } from '@ionic/storage';


export class User {
  name: string;
  email: string;
  idempleado: number;
  idConsulta: number;
  genero: number;
  idsucursal: number;

  constructor(name: string, email: string, idempleado: number, idConsulta: number,genero: number, idsucursal: number) {
    this.name = name;
    this.email = email;
    this.idempleado = idempleado;
    this.idConsulta=idConsulta;
    this.genero=genero;
    this.idsucursal=idsucursal;
  }
}


@Injectable()
export class LoginServicioProvider {

  currentUser: User;

  public url: string;
  public nameStringe: string;
  public emailStringe: string;
  public idempleadoStringe: string;
  public idConsultaStringe: string;
  public generoStringe: string;
  public idsucursalStringe: string;
  public banderaStronge: boolean = false;


  constructor(public http: Http,
    public varGlobal: VarGlobalesProvider,
    private platform: Platform,
    private storage: Storage) {
    this.url = varGlobal.ulr;

  }



  public actualizarPass(id, dato) {
   
    let datax = new URLSearchParams();
    datax.append("idempleado", id);
    datax.append("passworduno", dato.value.pass2);
    let url = this.url + '/app/actualizarPass';

    return new Promise(
      resolve => {
        this.http.post(url,datax)
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

  public postLogin(credentials) {

    

    var params = 'email=' + credentials.email 
    + '&password=' + credentials.password;

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    let url = this.url + '/app/login';
    return new Promise(
      resolve => {
        this.http.post(url,params, { headers:headers })
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


  public sesionUserStronge(usuario, email, idempleado,idConsulta,genero,idsucursal) {

    this.currentUser = new User(usuario, email, idempleado,idConsulta,genero,idsucursal);

  }
  public sesionUser(usuario, email, idempleado,idConsulta,genero,idsucursal) {

    this.guardarStorage(usuario, email, idempleado,idConsulta,genero,idsucursal);
    return Observable.create(observer => {
      let access = true;
      this.currentUser = new User(usuario, email, idempleado,idConsulta,genero,idsucursal);
      observer.next(access);
      observer.complete();
    });



  }

  public logout() {


    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
      this.remover();
    });
  }

  remover() {


    if (this.platform.is("cordova")) {

      this.storage.remove('usuario');
      this.storage.remove('email');
      this.storage.remove('idempleado');
      localStorage.removeItem('idConsulta');
      localStorage.removeItem('genero');
      localStorage.removeItem('idsucursal');
    } else {

      localStorage.removeItem('usuario');
      localStorage.removeItem('email');
      localStorage.removeItem('idempleado');
      localStorage.removeItem('idConsulta');
      localStorage.removeItem('genero');
      localStorage.removeItem('idsucursal');

    }
    this.banderaStronge = false;

  }

  guardarStorage(usuario, email, idempleado,idConsulta,genero,idsucursal) {


    if (this.platform.is("cordova")) {

      this.storage.set('usuario', usuario);
      this.storage.set('email', email);
      this.storage.set('idempleado', idempleado);
      this.storage.set('idConsulta', idConsulta);
      this.storage.set('genero', genero);
      this.storage.set('idsucursal', idsucursal);
    } else {

      console.log("Entro a guardar Storige");

      localStorage.setItem('usuario', usuario);
      localStorage.setItem('email', email);
      localStorage.setItem('idempleado', idempleado);
      localStorage.setItem('idConsulta', idConsulta);
      localStorage.setItem('genero', genero);
      localStorage.setItem('idsucursal', idsucursal);

    }

  }


  cargarStorage() {

    if (this.platform.is("cordova")) {

      this.storage.ready()
        .then(() => {
          this.storage.get('idempleado')
            .then((idempleado) => {
              if (idempleado) {
                this.idempleadoStringe = idempleado;
              }
            });

          this.storage.get('usuario')
            .then((usuario) => {
              if (usuario) {
                this.nameStringe = usuario;
              }
            });

          this.storage.get('email')
            .then((email) => {
              if (email) {
                this.emailStringe = email;
              }
            });

            this.storage.get('idsucursal')
            .then((idsucursal) => {
              if (idsucursal) {
                this.idsucursalStringe = idsucursal;
              }
            });
            this.storage.get('idConsulta')
            .then((idConsulta) => {
              if (idConsulta) {
                this.idConsultaStringe = idConsulta;
              }
            });
            this.storage.get('genero')
            .then((genero) => {
              if (genero) {
                this.generoStringe = genero;
              }
            });
          // Sirve para comprobar
          this.storage.get('idempleado')
            .then((idempleado) => {
              if (idempleado) {


                this.banderaStronge = true;
                this.sesionUserStronge(this.nameStringe, this.emailStringe, this.idempleadoStringe,this.idConsultaStringe,this.generoStringe,this.idsucursalStringe);

              } else {
                this.remover();

              }
            });




        });




    } else {



      if (localStorage.getItem("idempleado")) {

        this.idempleadoStringe = localStorage.getItem("idempleado");

      }
      if (localStorage.getItem("usuario")) {

        this.nameStringe = localStorage.getItem("usuario");

      }

      if (localStorage.getItem("email")) {

        this.emailStringe = localStorage.getItem("email");

        
      }

      if (localStorage.getItem("idConsulta")) {

        this.idConsultaStringe = localStorage.getItem("idConsulta");

      }
      if (localStorage.getItem("genero")) {

        this.generoStringe = localStorage.getItem("genero");

      }
      if (localStorage.getItem("idsucursal")) {

        this.idsucursalStringe = localStorage.getItem("idsucursal");

      }


      if (localStorage.getItem("idempleado")) {

        this.banderaStronge = true;
        this.sesionUserStronge(this.nameStringe, this.emailStringe, this.idempleadoStringe,this.idConsultaStringe,this.generoStringe,this.idsucursalStringe);
      } else {

        this.remover();
      }



    }

  }
}