import {Component, OnInit, Input, OnDestroy} from '@angular/core';

import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';

@Component({
  selector: 'app-modifierunagent',
  templateUrl: './modifierunagent.component.html',
  styleUrls: ['./modifierunagent.component.css'],
})
export class ModifierunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  show = true;
  essai: Conseiller[];
  displaycard = false;
  constructor(public myAgentListservice: FakeServiceConseillerService) {}
  effacechoix() {
    this.searchText = '';
    this.show = true;
    this.displaycard = false;
  }
  agentsChoice(individu: Conseiller) {
    this.searchText = individu.nom + ' ' + individu.prenom;
    this.displaycard = true;
    this.show = false;
  }
  SortconselorbynumberOfid(obj1: number, obj2: number): number {
    const a = obj1;
    const b = obj2;
    return a > b ? 1 : -1;
  }
  ngOnInit() {
    this.myAgentListservice
      .getAll()
      .subscribe(agents => (this.myAgentList = agents));
    this.essai = this.myAgentList.sort((obj1, obj2) =>
      this.SortconselorbynumberOfid(obj1.mle, obj2.mle)
    );
  }
  ngOnDestroy() {}
}
