import { Component, OnInit, OnDestroy } from '@angular/core';
import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
@Component({
  selector: 'app-supprimerunagent',
  templateUrl: './supprimerunagent.component.html',
  styleUrls: ['./supprimerunagent.component.css']
})
export class SupprimerunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  displaycard = false;
  constructor(public myAgentListservice: FakeServiceConseillerService) {
    this.agentselectionner = new Conseiller(0, '', '', '', '', '', '', null, '');


  }
  agentsChoice(individu: Conseiller) {
    this.agentselectionner = individu;
    this.searchText = individu.nom + ' ' + individu.prenom;
    this.displaycard = true;
  }
  ngOnInit() {
    this.myAgentList = this.myAgentListservice.getAll();

  }
  ngOnDestroy() {

  }
deleteConsultant() {
    this.myAgentListservice.deleteCounselor(this.agentselectionner);
    this.myAgentList = this.myAgentListservice.getAll();
    this.displaycard = false;
    this.searchText = '';
  }
}
