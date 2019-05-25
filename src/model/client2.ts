import { Conseiller } from './conseiller';

export class Client {
	id: number;
	motDePasse: string;
	nom: string;
	prenom: string;
	email: string;
	telephone: string;
	adresse: string;
	codePostale: number;
	ville: string;
	situation: string;
	nombreEnfant: number;
	conseiller: Conseiller;
  
	constructor(
clientId,		
clientAdresse,
clientCp,
clientEmail,
clientMdp,
client_nbEnfant,
clientNom,
clientPrenom,
clientSituation,
clientTel,
clientVille,
conseiller
	) {
	  this.id = clientId;
	  this.motDePasse = clientMdp;
	  this.nom = clientNom;
	  this.prenom = clientPrenom;
	  this.email = clientEmail;
	  this.telephone = clientTel;
	  this.adresse = clientAdresse;
	  this.codePostale = clientCp;
	  this.ville = clientVille;
	  this.situation = clientSituation;
	  this.nombreEnfant = client_nbEnfant;
	  this.conseiller = conseiller;
	}
  }
  
  /* [{"clientId":1,
"clientAdresse":"8 Rue des Shleux",
"clientCp":66800,
"clientEmail":"gdg@gmail.com",
"clientMdp":"Pass1234",
"client_nbEnfant":12,
"clientNom":"DeGaule",
"clientPrenom":"GÃ©nÃ©ral",
"clientSituation":"Mort",
"clientTel":"0662885569",
"clientVille":"Colombey"}*/
