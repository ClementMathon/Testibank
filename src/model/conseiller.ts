export class Conseiller {
    mle: number;
    dateEmbauche: string;
    nom: string;
    prenom: string;
    email: string;
    tel: string;
    adresse: string;
    cp: number;
    ville: string;

    // constructor
    constructor(mle: number, dateEmbauche: string, nom: string, prenom: string,
                email: string, tel: string, adresse: string, cp: number, ville: string) {
        this.mle = mle;
        this.dateEmbauche = dateEmbauche;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.tel = tel;
        this.adresse = adresse;
        this.cp = cp;
        this.ville = ville;
    }
}

