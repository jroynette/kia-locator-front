import { Component } from '@angular/core';

import { InfoSallePage } from '../infosSalle/infoSalle';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  infoPage: any = InfoSallePage;

  constructor(public navCtrl: NavController) {}

  goToPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(this.infoPage);
  }

}
