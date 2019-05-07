import { Component, OnInit } from '@angular/core';

import { Conseiller } from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
import {FakeServiceClientService} from '../../../model/fake-service-client.service';
import {Client} from '../../../model/client';
@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit {
  searchText = '';
  searchText1 = '';

  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  clientselectionner: Client;
  myClientList: Client[];
  constructor(
    public myAgentListservice: FakeServiceConseillerService,
    public MyClientListservice: FakeServiceClientService
  ) {
    this.agentselectionner = new Conseiller(
      0,
      '',
      '',
      '',
      '',
      '',
      '',
      null,
      ''
    );
    this.clientselectionner = new Client(
      1,
      '',
      '',
      '',
      '',
      '',
      '',
      0,
      '',
      '',
      0,
      null
    );
  }
  agentsChoice(individu: Conseiller) {
    this.agentselectionner = individu;
    this.searchText = individu.nom + ' ' + individu.prenom;
  }
  clientsChoice(myclient: Client) {
    this.clientselectionner = myclient;
    this.searchText1 = myclient.nom + ' ' + myclient.prenom;
  }

  ngOnInit() {
    this.myAgentList = this.myAgentListservice.getAll();
    this.myClientList = this.MyClientListservice.getAll().filter(
      it => it.conseiller === null
    );
    this.searchText = '';
    this.searchText1 = '';
  }
  assigneclienttoconselor() {
this.MyClientListservice.setConseillerToClient(this.clientselectionner.id, this.agentselectionner.mle);
this.ngOnInit();
}
}
