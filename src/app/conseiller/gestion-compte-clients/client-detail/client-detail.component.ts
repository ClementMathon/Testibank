import { Component, OnInit, Input } from '@angular/core';

import { Compte } from 'src/model/compte';
import {FakeServiceCompteService} from '../../../../model/fake-service-compte.service';
import { Client2 } from 'src/model/client2';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  @Input() client: Client2;
  @Input() comptecli: Compte[];
  @Input() showCompteFlag: boolean;

  comptesDuClient: Compte[];
  showCompte = this.showCompteFlag;
  selectedCompteClient: Compte = null;

  onSelect(compteClient: Compte): void {
    this.selectedCompteClient = compteClient;
    this.showCompte = true;
  }

  constructor(private compteClientService: FakeServiceCompteService) {}

  getComptesClient(): void {
  this.compteClientService.getComptesDuClient( this.client.clientId).subscribe((data) => {this.comptesDuClient=data});
  }

  // putting this.client.id instead of 1 doesn't work
  ngOnInit() {
    this.getComptesClient();

  }
  
}
