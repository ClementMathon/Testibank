import { Component, OnInit } from '@angular/core';
import {MOCKCLIENTS} from '../gestion-compte-clients/mock-clients';
import { Client2 } from 'src/model/client2';
import {MockclientService} from '../gestion-compte-clients/mockclient.service';


@Component({
  selector: 'app-gestion-compte-clients',
  templateUrl: './gestion-compte-clients.component.html',
  styleUrls: ['./gestion-compte-clients.component.css']
})
export class GestionCompteClientsComponent implements OnInit {
 
  mockClients : Client2[];

  constructor( private mockclientService: MockclientService) { }

  getClients(): void {
    this.mockClients = this.mockclientService.getClients();
  }

  ngOnInit() {
    this.getClients();
  }

}
