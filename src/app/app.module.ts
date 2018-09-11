import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*=======================  page =================== */
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {MenuDesplegablePage} from '../pages/menu-desplegable/menu-desplegable';

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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuDesplegablePage
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    MenuDesplegablePage
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
