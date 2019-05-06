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
  conseiller: number;

  constructor(
    id,
    motDePasse,
    nom,
    prenom,
    email,
    telephone,
    adresse,
    codePostale,
    ville,
    situation,
    nombreEnfant,
    conseiller
  ) {
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
    this.nombreEnfant = nombreEnfant;
    this.conseiller = conseiller;
  }
}
