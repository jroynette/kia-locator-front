import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

import { Salle } from '../../../modele/salle';
import {SalleServices} from '../../../services/salle.service';

@Component({
  selector: 'edit-salle-page',
  templateUrl: 'editSalle.html'
})
export class EditSallePage {

    salle: Salle;

    constructor(private navParams: NavParams, private salleService: SalleServices) {
     this.salle = navParams.get('salle');
  }

    save() {
      this.salleService.save(this.salle);
    }
}
