import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListSallePage } from '../admin/listSalle/listSalle';
import { SelectSitePage } from '../selectSite/selectSite';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabRootHome: any = HomePage;
  tabRootAdmin: any = ListSallePage;
  tabRootSite: any = SelectSitePage;

  constructor() {

  }
}
