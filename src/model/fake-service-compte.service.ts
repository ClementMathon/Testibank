import { Injectable } from '@angular/core';
import { Compte } from './compte';
import { COMPTES } from 'src/model/mock-compte';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {

  constructor() { }

  /*getComptes(): Observable<Compte[]> {
    return of(COMPTES);
  }*/

  getComptesDuClient(targetClientID): Observable<Compte[]> {
    var filteredcomptes = COMPTES.filter(function (el) {
      return (el.idClient === targetClientID);
      });
  return of(filteredcomptes);
  }  

 
}
