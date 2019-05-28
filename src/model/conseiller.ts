export class Conseiller  {

  consId: number;
  consDateEmbauche: string;
  consNom: string;
  consPrenom: string;
  consEmail: string;
  consTel: string;
  consAdresse: string;
  consCp: number;
  consVille: string;
  constructor(mle: number, dateEmbauche: string, nom: string, prenom: string,
              email: string, tel: string, adresse: string, cp: number, ville: string) {
//this.consId = mle;
this.consDateEmbauche = dateEmbauche;
this.consNom = nom;
this.consPrenom = prenom;
this.consEmail = email;
this.consTel = tel;
this.consAdresse = adresse;
this.consCp = cp;
this.consVille = ville;
}
}
