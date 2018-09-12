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

/*===== FIN PAGE ==============================*/

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/* ================= Modulos ======================== */
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

//Son externos
import { LoginServicioProvider } from '../providers/login-servicio/login-servicio';
import { VarGlobalesProvider } from '../providers/var-globales/var-globales';



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
    PgrupoPage
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
    PgrupoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginServicioProvider,
    VarGlobalesProvider
  ]
})
export class AppModule {}
