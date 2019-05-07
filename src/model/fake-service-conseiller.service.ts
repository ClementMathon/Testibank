import { Injectable } from '@angular/core';
import { Conseiller } from './conseiller';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceConseillerService {
  fakeConseiller: Conseiller[] = [];
  decale: boolean[];
  myAdvisorByMle: Conseiller[];
  constructor() {
    this.decale = [true, false, false, false, false, false];
    this.fakeConseiller = [
      new Conseiller(
        0,
        '24/04/2019',
        'TARDIOU',
        'kim',
        'tk@gmail.com',
        '0700000000',
        '5 rue de la fontaine',
        69000,
        'Lyon'
      ),
      new Conseiller(
        10,
        '12/03/2019',
        'stephane',
        'stephane',
        'stephane@gmail.com',
        '0711111111',
        '10 rue jean jaures',
        69000,
        'Lyon'
      ),
      new Conseiller(
        1,
        '12/06/1956',
        'Poulain',
        'Innocent',
        'poulain@free.fr',
        '0123110740',
        'Place de l\'Église, 187',
        91387,
        'Neuilly-sur - Marne'
      ),
      new Conseiller(
        2,
        '07/02/2098',
        'Lejeune',
        'Francis',
        'francislejeune@yahoo.com',
        '0350602669',
        'Rue de la Mairie, 645',
        89718,
        'Poitiers'
      ),
      new Conseiller(
        3,
        '17/02/1902',
        'Binet',
        'Girart',
        'binet@orange.fr',
        '0425495926',
        'Rue Principale, 176 119',
        36413,
        'Ajaccio'
      ),
      new Conseiller(
        4,
        '14/03/1945',
        'Pujol',
        'Vital',
        'vitalpujol@laposte.net',
        '0873463443',
        'Rue de la Mairie, 90',
        47756,
        'Poissy'
      ),
      new Conseiller(
        5,
        '04/12/1958',
        'Lebon',
        'Lorelyne',
        'lebon@hotmail.fr',
        '0374098701',
        'Rue Victor-Hugo, 35',
        59263,
        'Albi'
      ),
      new Conseiller(
        6,
        '24/01/1927',
        'Roux',
        'Esteban',
        'roux@yahoo.fr',
        '078536042',
        'Rue Victor-Hugo, 138 25',
        93471,
        'Boulogne - sur - Mer'
      ),
      new Conseiller(
        7,
        '27/10/1943',
        'Arnaud',
        'Arnaud',
        'arnaudarnaud@gmail.com',
        '0757051033',
        'Rue des Écoles, 45',
        28407,
        'Échirolles'
      ),
      new Conseiller(
        8,
        '25/03/2081',
        'Boucher',
        'Aélis',
        'aelis.boucher@yahoo.fr',
        '0924040319',
        'Rue Pasteur, 35',
        15128,
        'Fort - de - France'
      ),
      new Conseiller(
        9,
        '21/04/1957',
        'Bouquet',
        'Iris',
        'bouquet@yahoo.com',
        '0294654344',
        'Place de la Mairie, 24',
        72176,
        'Montpellier'
      )
    ];
  }

  getAll() {
    return this.fakeConseiller;
  }
  addCounselor(myNewAdvisor: Conseiller): void {
    myNewAdvisor.mle = this.fakeConseiller.length + 1;
    this.fakeConseiller.push(myNewAdvisor);
  }
  deleteCounselor(myNewAdvisor: Conseiller): void {
    this.fakeConseiller = this.fakeConseiller.filter(
      it => it.mle !== myNewAdvisor.mle
    );
  }
  ModifCounselor(myNewAdvisor: Conseiller): void {
    this.fakeConseiller
      .filter(it => it.mle === myNewAdvisor.mle)
      .fill(myNewAdvisor);
  }
  returnCounselorByMle(mle: number): Conseiller[] {
    this.myAdvisorByMle = this.fakeConseiller.filter(
      conseiller1 => conseiller1.mle === mle
    );
    return this.myAdvisorByMle;
  }
}
