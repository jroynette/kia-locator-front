export class Salle {

  constructor(public nom: string,
              public capacite: number,
              public retro: boolean,
              public visio: boolean,
              public site: string,
              public batiment: string,
              public etage: number,
              public position_x: number,
              public position_y: number,
              public disponible: boolean,
              public photos : any) {
  }
}
