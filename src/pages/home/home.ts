import {Component} from '@angular/core';
import {SalleServices} from "../../services/salle.service"
import {Salle} from '../../modele/salle';
import {Carte} from '../../modele/carte';
import {MapsPage} from '../maps/maps';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public salles: Salle[];
  public cartes: Carte[];

  mapsPage: any = MapsPage;

  constructor(private salleService: SalleServices, public navCtrl: NavController) {
    this.initializeItems();
  }

  public getCartes() {
    this.cartes = this.salleService.getListLieux();
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

  // Fin fonction copiees
  focusOnSalle(salle) {
    this.navCtrl.push(this.mapsPage, { salle : salle.nom });
  }


}
