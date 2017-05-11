import {Injectable} from '@angular/core';
import {Salle} from '../modele/salle';
import {Carte} from '../modele/carte';


@Injectable()
export class SalleServices {

  constructor() {
  }

  getListSalles() {
    return [
      new Salle("Kenzo", 8, true, false, "Lys", "A", 2, 5, 6, true, ["http://www.cc-bernay.com/medias/Image/economie/centre%20d%27affaires/salle-reunion.JPG", "http://www.midi-hotel-paris.com/images/PHOTOS/sallereunionexterieur.jpg"]),
      new Salle("Test", 6, true, false, "Lys", "A", 2, 4, 6, true, ["http://www.bowlingdutrefle.fr/admin/data/img/gallery/reunion-gal/salle_reunion_grande.jpg", "http://www.levaisseau.com/IMG/image/FR/Univers%20pro/Location%20d%27espaces/Nos%20salles/Photo%20de%20l%27atelier%20nature%20vu%20de%20l%27ext%C3%A9rieur.JPG"]),
      new Salle("Tutu", 6, true, false, "Lys", "A", 2, 4, 6, true, ["http://www.bowlingdutrefle.fr/admin/data/img/gallery/reunion-gal/salle_reunion_grande.jpg", "http://www.levaisseau.com/IMG/image/FR/Univers%20pro/Location%20d%27espaces/Nos%20salles/Photo%20de%20l%27atelier%20nature%20vu%20de%20l%27ext%C3%A9rieur.JPG"]),
      new Salle("Toto", 6, true, false, "Lys", "A", 2, 4, 6, true, ["http://www.bowlingdutrefle.fr/admin/data/img/gallery/reunion-gal/salle_reunion_grande.jpg", "http://www.levaisseau.com/IMG/image/FR/Univers%20pro/Location%20d%27espaces/Nos%20salles/Photo%20de%20l%27atelier%20nature%20vu%20de%20l%27ext%C3%A9rieur.JPG"])
    ]
      ;
  }

  getListLieux() {
    return [new Carte("Lys", "B", 2, "url"), new Carte("Lys", "A", 1, "url")];
  }

  save(salle) {
    console.log('Salle ' + salle.nom + ' sauvegardée !')
  }

  book(salle) {
    console.log('Salle ' + salle.nom + ' réservée !')
  }

}
