import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import {FakeServiceClientService} from '../../../model/fake-service-client.service';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { Compte } from 'src/model/compte';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-gestion-compte-clients',
  templateUrl: './gestion-compte-clients.component.html',
  styleUrls: ['./gestion-compte-clients.component.css'],
})
export class GestionCompteClientsComponent implements OnInit {
  clients: Client[];
  selectedClient: Client;
  comptesDuClient: Observable<Compte[]>;
  show = false;
  constructor(
    private clientService: FakeServiceClientService,
    private compteClientService: FakeServiceCompteService
  ) {}

  onSelect(client: Client): void {
    this.selectedClient = client;
    this.getComptesClient(this.selectedClient);
    this.show = true;
  }

  getClients(): void {
    this.clients = this.clientService.getClientsDuConseiller(1);
  }
  getComptesClient(selectedClient: Client) {
    this.comptesDuClient = this.compteClientService.getComptesDuClient(
      selectedClient.id
    );
  }

  ngOnInit() {
    this.getClients();
  }
}
