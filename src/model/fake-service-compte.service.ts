import { Injectable } from '@angular/core';
import { Compte } from './compte';

@Injectable({
  providedIn: 'root'
})
export class FakeServiceCompteService {

  constructor() { }

  getAll() {
    const fakeComptes = [
      new Compte(),
      new Compte(),
      new Compte()
    ];

    return fakeComptes;
  }
}
