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

  getComptesDuClient(targetClientID): Compte[] {
    return COMPTES.filter(compteclientvisé =>  compteclientvisé.idClient === targetClientID);
  }
}
