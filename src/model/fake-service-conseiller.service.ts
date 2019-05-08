import { Injectable } from '@angular/core';
import { Conseiller } from './conseiller';

@Injectable({
  providedIn: 'root'
})

export class FakeServiceConseillerService {
  fakeConseiller: Conseiller[] = [];


  myAdvisorByMle: Conseiller[];
  constructor() {

    this.fakeConseiller = [
      new Conseiller(
        0,
        '2019/04/24',
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
        '2019/03/12',
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
        '1965/06/12',
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
        '2007/02/20',
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
        '2017/02/19',
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
        '2014/03/19',
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
        '2004/12/18',
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
        '1924/01/27',
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
        '2017/10/13',
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
        '1952/03/21',
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
        '2001/04/17',
        'Bouquet',
        'Iris',
        'bouquet@yahoo.com',
        '0294654344',
        'Place de la Mairie, 24',
        72176,
        'Montpellier'
      )
    ];
    this.fakeConseiller.sort((obj1, obj2) =>  (obj1.mle > obj2.mle ? 1 : -1) ) ;
  }

  getAll() {
    return this.fakeConseiller;
  }
  addCounselor(myNewAdvisor: Conseiller): void {
    myNewAdvisor.mle = Math.max(...this.fakeConseiller.map(o => o.mle), 0) + 1;
    this.fakeConseiller.push(myNewAdvisor);
  }
  deleteCounselor(myNewAdvisor: Conseiller): void {
    this.fakeConseiller = this.fakeConseiller.filter(
      it => it.mle !== myNewAdvisor.mle
    );
  }
  ModifCounselor(myNewAdvisor: Conseiller): void {
    this.fakeConseiller.filter(it => it.mle === myNewAdvisor.mle)[0] = myNewAdvisor;
  }
  CounselorByMle(mle: number): Conseiller[] {
    this.myAdvisorByMle = this.fakeConseiller.filter(
      conseiller1 => conseiller1.mle === mle
    );
    return this.myAdvisorByMle;
  }


}
