import {Salle} from "./salle";

export class Plan {

  constructor(public id: number,
              public site: string,
              public batiment: string,
              public etage: string,
              public url: string,
              public salles: Salle[]) {
  }
}
