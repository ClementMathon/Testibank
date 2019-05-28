import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import {FakeServiceClientService} from '../../../model/fake-service-client.service';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { Compte } from 'src/model/compte';
import { ClientService } from 'src/model/client.service';
import { Client2 } from 'src/model/client2';
import { Observable } from 'rxjs';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';


@Component({
  selector: 'app-gestion-compte-clients',
  templateUrl: './gestion-compte-clients.component.html',
  styleUrls: ['./gestion-compte-clients.component.css'],
})
export class GestionCompteClientsComponent implements OnInit {
  clients: Client2[] = [];
  selectedClient: Client2;
  comptesDuClient: Compte[];
  show = false;
  showdetail=false;
  
  constructor(
  //  private clientService: FakeServiceClientService,
  private clientService: ClientService,
    private compteClientService: FakeServiceCompteService
  ) {}

  onSelect(client: Client2): void {
    this.selectedClient = client;
    this.getComptesClient(this.selectedClient);
    this.show = true;
  }

  getClients(): void {
    this.clientService.getClientsDuConseiller(1).subscribe(
(data:Client2[])=>{this.clients=data}, (error) => {console.log('error')}

    );
  }
  getComptesClient(selectedClient: Client2) {
    this.compteClientService.getComptesDuClient( this.selectedClient.clientId).subscribe(data => {this.comptesDuClient=data});
  }

  ngOnInit() {
    this.getClients();
  }
}
