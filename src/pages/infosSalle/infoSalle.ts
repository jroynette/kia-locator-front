import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'info-salle',
  templateUrl: 'infosSalle.html'
})
export class InfoSallePage {

  constructor(public navCtrl: NavController) {
  }

  goBack() {
    this.navCtrl.pop();
  }

}
