import { Injectable } from '@angular/core';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {

  constructor() { }

  getAll(){
    const fakeComptes = [
      new Compte(0,0,2,250,5000),
      new Compte(1,1,1,500,10000),
      new Compte(2,1,1,800,15000)
    ]

    return fakeComptes;
  }
}
