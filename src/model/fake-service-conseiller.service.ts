import { Injectable } from '@angular/core';
import { Conseiller } from './conseiller';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceConseillerService {

  constructor() { }

  getAll()  {
    const fakeConseillers = [
      new Conseiller(0,"24/04/2019","TARDIOU","kim","tk@gmail.com","0700000000","5 rue de la fontaine",69000,"Lyon"),
      new Conseiller(1,"12/03/2019","stephane","stephane","stephane@gmail.com","0711111111","10 rue jean jaures",69000,"Lyon")
    ]
    return fakeConseillers;
  }
}
