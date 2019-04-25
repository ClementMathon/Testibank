export class Client{
	id : string;
	motDePasse : string;
	nom: string;
	prenom : string;
	email : string;
	telephone : string;
	adresse : string;
	codePostale : Number;
	ville : string;
	situation : string;
	nombreEnfant: Number;
	conseiller : Number;

	constructor ( id, motDePasse, nom, prenom, email, telephone, adresse, codePostale, ville, situation, nombreEnfant, conseiller){
		this.id = id;
		this.motDePasse = motDePasse;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.telephone = telephone;
		this.adresse = adresse;
		this.codePostale = codePostale;
		this.ville = ville;
		this.situation = situation;
		this.conseiller = conseiller;
	}
}

