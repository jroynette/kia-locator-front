import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Salle } from '../../../modele/salle';
import {EditSallePage} from '../editSalle/editSalle';
import {SalleServices} from '../../../services/salle.service';

@Component({
  selector: 'page-list-salle',
  templateUrl: 'listSalle.html'
})
export class ListSallePage {

  salles: Salle[] = [];

  constructor(public navCtrl: NavController, private salleService: SalleServices) {
    this.initializeItems();
  }

  itemSelected(salle:Salle){
    this.navCtrl.push(EditSallePage, { salle: salle})
  }

  // Fonctions copiees de la doc ionic
  initializeItems() {
    this.salles = this.salleService.getListSalles();
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.salles = this.salles.filter((salle) => {
        return (salle.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
