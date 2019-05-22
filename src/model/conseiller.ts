export class Conseiller  {

  cons_id: number;
  cons_dateEmbauche: string;
  cons_nom: string;
  cons_prenom: string;
  cons_email: string;
  cons_tel: string;
  cons_adresse: string;
  cons_cp: number;
  cons_ville: string;
  constructor(mle: number, dateEmbauche: string, nom: string, prenom: string,
              email: string, tel: string, adresse: string, cp: number, ville: string) {
this.cons_id = mle;
this.cons_dateEmbauche = dateEmbauche;
this.cons_nom = nom;
this.cons_prenom = prenom;
this.cons_email = email;
this.cons_tel = tel;
this.cons_adresse = adresse;
this.cons_cp = cp;
this.cons_ville = ville;
}
}
