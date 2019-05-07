import { Component, OnInit, Input } from '@angular/core';
import {Client} from 'src/model/client';
import { Compte } from 'src/model/compte';
import {FakeServiceCompteService} from '../../../../model/fake-service-compte.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  @Input() client: Client;
  @Input() comptecli: Compte[];

  comptesDuClient: Compte[];

  selectedCompteClient: Compte;

  onSelect(compteClient: Compte): void {
    this.selectedCompteClient = compteClient;

  }

  constructor(private compteClientService: FakeServiceCompteService) {}

  getComptesClient(): void {
    this.comptesDuClient = this.compteClientService.getComptesDuClient( this.client.id );

  }

  // putting this.client.id instead of 1 doesn't work
  ngOnInit() {
    this.getComptesClient();
  }
}
