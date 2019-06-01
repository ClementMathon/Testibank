import {Component, OnInit, OnDestroy} from '@angular/core';
import { Location } from '@angular/common';

import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-modifierunagent',
  templateUrl: './modifierunagent.component.html',
  styleUrls: ['./modifierunagent.component.css']

})
export class ModifierunagentComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: Conseiller[];
  agentselectionner: Conseiller;
  show = true;
  essai: Conseiller[];
  displaycard = false;
  constructor(private myAgentListservice: FakeServiceConseillerService, private location: Location) {




  }
  effacechoix() {
    this.searchText = '';
    this.show = true;
    this.displaycard = false;

  }
  agentsChoice(individu: Conseiller) {
    this.searchText = individu.consNom + ' ' + individu.consPrenom;
    this.displaycard = true;
    this.show = false;
  }
  SortconselorbynumberOfid(obj1: number, obj2: number): number {
    const a = obj1;
    const b = obj2;
    return a > b ? 1 : -1;
  }
  ngOnInit() {
    this.getAgentlist();
      }
      getAgentlist() {
         this.myAgentListservice.getAll().subscribe((data) => {
          this.myAgentList = data;
          });
         this.effacechoix();
         return this.myAgentList.sort((obj1, obj2) =>
          this.SortconselorbynumberOfid(obj1.consId, obj2.consId));






      }
  onVoted(agreed: boolean) {

    this.effacechoix();
    this.getAgentlist();
    this.ngOnInit();
    document.location.reload(true);
  }
  ngOnDestroy() {}
}
