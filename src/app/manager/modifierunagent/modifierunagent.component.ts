import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Conseiller } from 'src/model/conseiller';

import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';

@Component({
  selector: 'app-modifierunagent',
  templateUrl: './modifierunagent.component.html',
  styleUrls: ['./modifierunagent.component.css']
})
export class ModifierunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  displaycard = false;
  constructor(public myAgentListservice: FakeServiceConseillerService) {
    this.agentselectionner = new Conseiller(0, '', '', '', '', '', '', 0, '');


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
}
