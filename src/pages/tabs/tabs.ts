import { Component } from '@angular/core';

import {FotografiaPage} from '../fotografia/fotografia';

import {PentrenamientoPage} from '../pentrenamiento/pentrenamiento';
import {PerfilPage} from '../perfil/perfil';
import {PmenuPage} from '../pmenu/pmenu';
import { HomePage } from '../home/home';
import { MenuDesplegablePage } from '../menu-desplegable/menu-desplegable';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PerfilPage;
  tab3Root = FotografiaPage;
  tab4Root = PentrenamientoPage;
  tab5Root = PmenuPage;
  tab6Root = MenuDesplegablePage;

  constructor() {

  }
}
