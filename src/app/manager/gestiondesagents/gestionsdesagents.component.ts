import {Component,  OnInit, OnDestroy, } from '@angular/core';

import {Conseiller} from '../../../model/conseiller';
import {ActivatedRoute} from '@angular/router';
import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';

@Component({
  selector: 'app-gestiondesagents',
  templateUrl: './gestionsdesagents.component.html',
  styleUrls: ['./gestionsdesagents.component.scss'],

})
export class GestionDesAgentsComponent implements OnInit, OnDestroy {
  searchText: string;
  myAgentList: any = [];
  show = true;
  displaycard = false;
  essai: Conseiller[];
  constructor(public myAgentListservice: FakeServiceConseillerService) {

  }
  agentsChoice(individu: Conseiller) {
    this.searchText = individu.cons_nom + ' ' + individu.cons_prenom;
    this.displaycard = true;
    this.show = false;
  }
  effacechoix() {
    this.searchText = '';
    this.show = true;
    this.displaycard = false;
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
     this.myAgentListservice.getAll().subscribe(data => {
      this.myAgentList = data;
      });

     return this.myAgentList.sort((obj1, obj2) =>
      this.SortconselorbynumberOfid(obj1.cons_id, obj2.cons_id));
  }
  ngOnDestroy() {}

}
