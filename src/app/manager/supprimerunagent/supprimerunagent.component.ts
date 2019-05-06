import { Component, OnInit, OnDestroy } from '@angular/core';
import { Conseiller } from 'src/model/conseiller';

import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
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
    this.myAgentListservice.decale[3] = false;
    this.myAgentListservice.decale[0] = true;
  }
}
