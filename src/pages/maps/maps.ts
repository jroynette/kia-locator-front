import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Salle } from '../../modele/salle';


@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsPage {

  public salle : Salle;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.salle = this.navParams.get('salle');
    console.log(this.salle);
  }

  goBack() {
    this.navCtrl.pop();
  }

}
