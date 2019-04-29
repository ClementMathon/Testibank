import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import {FakeServiceClientService} from '../../../model/fake-service-client.service';


@Component({
  selector: 'app-gestion-compte-clients',
  templateUrl: './gestion-compte-clients.component.html',
  styleUrls: ['./gestion-compte-clients.component.css']
})
export class GestionCompteClientsComponent implements OnInit {
 
  clients : Client[];
  selectedClient: Client;
  constructor( private clientService: FakeServiceClientService) { }

  onSelect(client: Client): void {
    this.selectedClient = client;
  } 

  getClients(): void {
    this.clients = this.clientService.getClientsDuConseiller(1);
  }

  ngOnInit() {
    this.getClients();
  }

}
