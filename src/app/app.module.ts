import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*=======================  page =================== */

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {MenuDesplegablePage} from '../pages/menu-desplegable/menu-desplegable';
import {ConsultasPage} from '../pages/consultas/consultas';
import {PentrenamientoPage} from '../pages/pentrenamiento/pentrenamiento';
import {PerfilPage} from '../pages/perfil/perfil';
import {PmenuPage} from '../pages/pmenu/pmenu';
import {ComidasPage} from '../pages/comidas/comidas';
import {AlimentosPage} from '../pages/alimentos/alimentos';
import {PgrupoPage} from '../pages/pgrupo/pgrupo';
import {PlancPage} from '../pages/planc/planc';
import {SemanaPage} from '../pages/semana/semana';
import {MicroactivdadesPage} from '../pages/microactivdades/microactivdades';
import {EjerciciosPage} from '../pages/ejercicios/ejercicios';
import {SeriesPage} from '../pages/series/series';
import {VolumenesPage} from '../pages/volumenes/volumenes';


/*===== FIN PAGE ==============================*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* ================= Modulos ======================== */
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';




//Son externos
import { LoginServicioProvider } from '../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../providers/var-globales/var-globales';
import { PlanesconProvider } from '../providers/planescon/planescon';
import { PlanAlimenticioProvider } from '../providers/plan-alimenticio/plan-alimenticio';
import { PlanEntrenamientoProvider } from '../providers/plan-entrenamiento/plan-entrenamiento';



@NgModule({
  declarations: [
    MyApp,
    ConsultasPage,
    PentrenamientoPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuDesplegablePage,
    PerfilPage,
    PmenuPage,
    ComidasPage,
    AlimentosPage,
    PgrupoPage,
    PlancPage,
    SemanaPage,
    MicroactivdadesPage,
    EjerciciosPage,
    SeriesPage,
    VolumenesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsultasPage,
    PentrenamientoPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuDesplegablePage,
    PerfilPage,
    PmenuPage,
    ComidasPage,
    AlimentosPage,
    PgrupoPage,
    PlancPage,
    SemanaPage,
    MicroactivdadesPage,
    EjerciciosPage,
    SeriesPage,
    VolumenesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicioProvider,
    VarGlobalesProvider,
    PlanesconProvider,
    PlanAlimenticioProvider,
    PlanEntrenamientoProvider
  ]
})
export class AppModule {}
