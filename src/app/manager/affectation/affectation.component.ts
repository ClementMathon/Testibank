import {Component, OnInit} from '@angular/core';

import {Conseiller} from '../../../model/conseiller';

import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';

import {Client} from '../../../model/client';
import {ClientService} from 'src/model/client.service';
import {Client2} from 'src/model/client2';
import { error } from 'util';
class clientPerConselor {
  conseiller: number;
  Numberofclients: number;
  constructor(conseiller: number, Numberofclients: number) {
    this.conseiller = conseiller;
    this.Numberofclients = Numberofclients;
  }
}
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
  myAgentList: Conseiller[] = [];
  essai: Conseiller[];
  agentselectionner: Conseiller;
  clientselectionner: Client2;
  myClientList: Client2[];
  myClientListperconselor: Client2[];
  mapOfClientOfConselor: clientPerConselor[] = [];

  numberOfClientOfConselor: number;

  constructor(
    private myAgentListservice: FakeServiceConseillerService,
    private MyClientListservice: ClientService
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
    this.clientselectionner = new Client2();


    this.myAgentListservice.getAll().subscribe(data => {
      this.myAgentList = data;
      this.getnumberofclient();
    });

    this.MyClientListservice.getAll().subscribe(data => {
      this.myClientList = data;
    });
  }
  agentsChoice(individu: Conseiller) {
    this.agentselectionner = individu;
    this.searchText = individu.consNom + ' ' + individu.consPrenom;
    this.showconseiller = false;
  }
  clientsChoice(myclient: Client2) {
    this.clientselectionner = myclient;
    this.searchText1 = myclient.clientNom + ' ' + myclient.clientPrenom;
    this.showclient = false;
  }

  numberOfClientByConselor(conselorSelectedId: number): number {
    if (this.mapOfClientOfConselor.length !== 0) {
   let  mapOfClientOfConselorbyID = new clientPerConselor(0, 0);
   if (
     this.mapOfClientOfConselor.filter(
       p => p.conseiller === conselorSelectedId
     )[0] !== undefined
   ) {
     mapOfClientOfConselorbyID = this.mapOfClientOfConselor.filter(
       p => p.conseiller === conselorSelectedId
     )[0]; } else { return 0; }

   return mapOfClientOfConselorbyID.Numberofclients; } else { return 0; }
  }
  SortofconselorbynumberOfClient(obj1: number, obj2: number): number {
    const a = this.numberOfClientByConselor(obj1);
    const b = this.numberOfClientByConselor(obj2);
    return a > b ? -1 : 1;
  }
  ngOnInit() {
    this.getAgentlist();

    this.getClientlist();

    this.searchText = '';
    this.searchText1 = '';
  }
  private getnumberofclient() {
    this.myAgentList.map(p =>
      this.MyClientListservice.getClientsDuConseiller(p.consId).subscribe(
        data => {
          this.mapOfClientOfConselor.push(
            new clientPerConselor(p.consId, data)
          );
        }
      )
    );
  }

  getClientlist() {
    this.MyClientListservice.getAll().subscribe(data => {
      this.myClientList = data;
    });
  }

  getAgentlist() {
    this.myAgentListservice.getAll().subscribe(data => {
      this.myAgentList = data;
    });

    return this.myAgentList.sort((obj1, obj2) =>
      this.SortofconselorbynumberOfClient(obj1.consId, obj2.consId)
    );
  }
  assigneclienttoconselor() {
    //  this.MyClientListservice( this.clientselectionner.id,  this.agentselectionner.consId ).sub;
    this.ngOnInit();
  }
}
