import { Injectable } from '@angular/core';
import {MOCKCLIENTS} from '../gestion-compte-clients/mock-clients';

import { Client2 } from 'src/model/client2';

@Injectable({
  providedIn: 'root'
})
export class MockclientService {
  getClients(): Client2[] {
    return MOCKCLIENTS;
  }
  constructor() { }
}
