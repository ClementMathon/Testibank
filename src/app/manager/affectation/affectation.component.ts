import { Component, OnInit } from '@angular/core';

import { Conseiller } from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
import {FakeServiceClientService} from '../../../model/fake-service-client.service';
import {Client} from '../../../model/client';
@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css'],
})
export class AffectationComponent implements OnInit {
  searchText = '';
  searchText1 = '';
  showconseiller = true;
  showclient = true;
  myAgentList: Conseiller[];
  essai: Conseiller[];
  agentselectionner: Conseiller;
  clientselectionner: Client;
  myClientList: Client[];
  numberOfClientOfConselor: number;
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
    this.showconseiller = false;
  }
  clientsChoice(myclient: Client) {
    this.clientselectionner = myclient;
    this.searchText1 = myclient.nom + ' ' + myclient.prenom;
    this.showclient = false;
  }
  numberOfClientByConselor(conselorSelectedId: number): number {
    return (this.numberOfClientOfConselor = this.MyClientListservice.getClientsDuConseiller(
      conselorSelectedId
    ).length);
  }
  SortofconselorbynumberOfClient(obj1: number, obj2: number): number {
    const a = this.numberOfClientByConselor(obj1);
    const b = this.numberOfClientByConselor(obj2);
    return a > b ? -1 : 1;
  }
  ngOnInit() {
    this.myAgentList = this.myAgentListservice.getAll();
    this.essai = this.myAgentList.sort((obj1, obj2) =>
      this.SortofconselorbynumberOfClient(obj1.mle, obj2.mle)
    );

    this.myClientList = this.MyClientListservice.getAll().filter(
      it => it.conseiller === null
    );

    this.searchText = '';
    this.searchText1 = '';
  }
  assigneclienttoconselor() {
    this.MyClientListservice.setConseillerToClient(
      this.clientselectionner.id,
      this.agentselectionner.mle
    );
    this.ngOnInit();
  }
}
