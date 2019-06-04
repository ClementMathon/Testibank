import {Component, OnInit, AfterViewInit} from '@angular/core';
import {ClientService} from 'src/model/client.service';
import {Client2} from 'src/model/client2';
import {Conseiller} from '../../../model/conseiller';
import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';

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
    this.clientselectionner.conseiller = new Conseiller(
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
    let essai = 0;
    if (

      this.mapOfClientOfConselor.filter(
        p => p.conseiller === conselorSelectedId
      )[0] !== undefined
    ) {
      essai = this.mapOfClientOfConselor.filter(
        p => p.conseiller === conselorSelectedId
      )[0].Numberofclients;
    }


    return essai;
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
  getnumberofclient() {
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
    this.MyClientListservice.getClientsWithoutConseiller().subscribe(data => {
      this.myClientList = data;
    });
  }

  getAgentlist() {
    this.myAgentListservice.getAll().subscribe(data => {
      this.myAgentList = data;
    });
    setTimeout(() => {
      this.sortlist();
  }, 1000);
  }
  sortlist() {
    this.myAgentList.sort((obj1, obj2) =>
      this.SortofconselorbynumberOfClient(obj1.consId, obj2.consId)
    );
  }
  assigneclienttoconselor() {
    this.clientselectionner.conseiller = this.agentselectionner;
    this.clientselectionner.comptes = null;

    this.MyClientListservice.updateClient(this.clientselectionner).subscribe(
      data => {
        console.log('data' + data);
      },
      error => {
        console.log(error);
      }
    );
    this.ngOnInit();
  }
}
