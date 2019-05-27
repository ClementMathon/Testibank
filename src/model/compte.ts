export class Compte {
  compteId: number;
  idClient: number;
  compteType: number;
  compte_decouvertAutorise: number;
  compte_plafondAutorise: number;
  compteSolde: number;

  /**
   * on a obligatoirement besoin d'un client pour creer un compte <3
   */

  /*public constructor (numeroCompte: number ,idClient :number, typeCompte: number,  decouverAutorise: number, plafondAutorise: number){
		this.idClient = idClient;
		this.numeroCompte = numeroCompte;
		this.typeCompte = typeCompte;
		this.decouverAutorise = decouverAutorise;
		this.plafondAutorise = plafondAutorise;
	}

	public getNumeroCompte(): number {
		return this.numeroCompte;
	}
	public setNumeroCompte(value: number) {
		this.numeroCompte = value;
	}

	public getIdClient(): number {
		return this.idClient;
	}
	public setIdClient(value: number) {
		this.idClient = value;
	}


	public getTypeCompte(): number {
		return this.typeCompte;
	}
	public setTypeCompte(value: number) {
		this.typeCompte = value;
	}


	public getDecouverAutorise(): number {
		return this.decouverAutorise;
	}
	public setDecouverAutorise(value: number) {
		this.decouverAutorise = value;
	}


	public getPlafondAutorise(): number {
		return this.plafondAutorise;
	}
	public setPlafondAutorise(value: number) {
		this.plafondAutorise = value;
	}*/
}
