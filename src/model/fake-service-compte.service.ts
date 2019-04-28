import { Injectable } from '@angular/core';
import { Compte } from './compte';
import { COMPTES } from 'src/model/mock-compte';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {

  constructor() { }

  getComptes() {
    return COMPTES;
  }

  getComptesDuClient(targetClientID) {
    var filteredcomptes = COMPTES.filter(function (el) {
      return (el.idClient === targetClientID);
      });
  return filteredcomptes;
  }  

  /*
  getAll() {
    const fakeComptes = [
      new Compte(),
      new Compte(),
      new Compte()
    ];

    return fakeComptes;
  }*/
}
