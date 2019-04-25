export class Compte{	
	private numeroCompte: Number; 
	private idClient: Number;
	private typeCompte: Number;
	private decouverAutorise: Number;
	private plafondAutorise: Number;

	/**
	 * on a obligatoirement besoin d'un client pour creer un compte <3
	 */

	

	public constructor (numeroCompte: Number ,idClient :Number, typeCompte: Number,  decouverAutorise: Number, plafondAutorise: Number){
		this.idClient = idClient;
		this.numeroCompte = numeroCompte;
		this.typeCompte = typeCompte;
		this.decouverAutorise = decouverAutorise;
		this.plafondAutorise = plafondAutorise;
	}

	public getNumeroCompte(): Number {
		return this.numeroCompte;
	}
	public setNumeroCompte(value: Number) {
		this.numeroCompte = value;
	}

	public getIdClient(): Number {
		return this.idClient;
	}
	public setIdClient(value: Number) {
		this.idClient = value;
	}

	
	public getTypeCompte(): Number {
		return this.typeCompte;
	}
	public setTypeCompte(value: Number) {
		this.typeCompte = value;
	}

	
	public getDecouverAutorise(): Number {
		return this.decouverAutorise;
	}
	public setDecouverAutorise(value: Number) {
		this.decouverAutorise = value;
	}

	
	public getPlafondAutorise(): Number {
		return this.plafondAutorise;
	}
	public setPlafondAutorise(value: Number) {
		this.plafondAutorise = value;
	}
}
