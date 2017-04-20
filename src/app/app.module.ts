import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MapsPage } from '../pages/maps/maps';
import {InfoSallePage} from "../pages/infosSalle/infoSalle";
import {SalleServices} from "../services/salle.service"

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    MapsPage,
    InfoSallePage
  ],
  imports: [
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    InfoSallePage,
    MapsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SalleServices]
})
export class AppModule {}
