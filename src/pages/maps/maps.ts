import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Salle } from '../../modele/salle';
import {InfoSallePage} from '../infosSalle/infoSalle';



@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  public salle : Salle;
  infoSallePage: any = InfoSallePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.salle = this.navParams.get('salle');
  }

  goBack() {
    this.navCtrl.pop();
  }

  details () {
    this.navCtrl.push(this.infoSallePage, { salle : this.salle })
  }

}
