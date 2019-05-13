import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
@Component({
  selector: 'app-supprimerunagent',
  templateUrl: './supprimerunagent.component.html',
  styleUrls: ['./supprimerunagent.component.css'],
})
export class SupprimerunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  displaycard = false;
  essai: Conseiller[];
  constructor(public myAgentListservice: FakeServiceConseillerService) {
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
  }
  agentsChoice(individu: Conseiller) {
    this.agentselectionner = individu;
    this.searchText = individu.nom + ' ' + individu.prenom;
    this.displaycard = true;
  }
  ngOnInit() {
    this.myAgentListservice
      .getAll()
      .subscribe(agents => (this.myAgentList = agents));
    this.essai = this.myAgentList.sort((obj1, obj2) =>
      this.SortconselorbynumberOfid(obj1.mle, obj2.mle)
    );
  }
  SortconselorbynumberOfid(obj1: number, obj2: number): number {
    const a = obj1;
    const b = obj2;
    return a > b ? 1 : -1;
  }
  ngOnDestroy() {}
  affichelist() {
    this.displaycard = false;
    this.searchText = '';
  }
  deleteConsultant() {
    this.myAgentListservice.deleteCounselor(this.agentselectionner);
    this.myAgentListservice
      .getAll()
      .subscribe(agents => (this.myAgentList = agents));
    this.displaycard = false;
    this.searchText = '';
  }
}
