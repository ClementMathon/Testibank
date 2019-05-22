import {Component, OnInit, OnDestroy} from '@angular/core';
import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
@Component({
  selector: 'app-supprimerunagent',
  templateUrl: './supprimerunagent.component.html',
  styleUrls: ['./supprimerunagent.component.css']

})
export class SupprimerunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: any = [];
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
    this.searchText = individu.cons_nom + ' ' + individu.cons_prenom;
    this.displaycard = true;
  }
  ngOnInit() {
    this.getAgentlist();
      }
      getAgentlist() {
         this.myAgentListservice.getAll().subscribe(data => {
          this.myAgentList = data;
          });

         return this.myAgentList.sort((obj1, obj2) =>
          this.SortconselorbynumberOfid(obj1.cons_id, obj2.cons_id));






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
    this.ngOnInit();
  }
  deleteConsultant() {
    this.myAgentListservice.deleteCounselor(this.agentselectionner).subscribe(data => {
      this.myAgentList = data;


    });
    this.displaycard = false;
    this.searchText = '';
    this.myAgentList.sort((obj1, obj2) =>
    this.SortconselorbynumberOfid(obj1.cons_id, obj2.cons_id));
    this.ngOnInit();
  }
}
