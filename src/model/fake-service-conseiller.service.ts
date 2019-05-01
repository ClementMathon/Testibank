import { Injectable } from '@angular/core';
import { Conseiller } from './conseiller';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceConseillerService {
  fakeConseiller: Conseiller [] = [];

  myAdvisorByMle: Conseiller[];
  constructor() {
  this.fakeConseiller = [
    new Conseiller(0, '24/04/2019', 'TARDIOU', 'kim', 'tk@gmail.com', '0700000000', '5 rue de la fontaine', 69000, 'Lyon'),
    new Conseiller(1, '12/03/2019', 'stephane', 'stephane', 'stephane@gmail.com', '0711111111', '10 rue jean jaures', 69000, 'Lyon')
  ]; }

  getAll()  {

     return this.fakeConseiller;
  }
  addCounselor(myNewAdvisor: Conseiller): void {
    myNewAdvisor.mle = this.fakeConseiller.length + 1;
    this.fakeConseiller.push(myNewAdvisor);

  }
  returnCounselorByMle(mle: number): Conseiller[] {
this.myAdvisorByMle = this.fakeConseiller.filter(conseiller1 => conseiller1.mle === mle);
return this.myAdvisorByMle;
  }
}
