import { Component, OnInit } from '@angular/core';
import {MOCKCLIENTS} from '../gestion-compte-clients/mock-clients';


@Component({
  selector: 'app-gestion-compte-clients',
  templateUrl: './gestion-compte-clients.component.html',
  styleUrls: ['./gestion-compte-clients.component.css']
})
export class GestionCompteClientsComponent implements OnInit {
 mockClients = MOCKCLIENTS;
  constructor() { }

  ngOnInit() {
  }

}
