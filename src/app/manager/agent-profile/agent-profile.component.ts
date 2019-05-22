import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {FakeServiceConseillerService} from '../../../model/fake-service-conseiller.service';
import {Conseiller} from '../../../model/conseiller';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss'],
})
export class AgentProfileComponent implements OnInit, OnDestroy {
  myNewAdvisor: Conseiller;
  myAgentList: any = [];
  constructor(private myAgentListservice: FakeServiceConseillerService) {
    this.myNewAdvisor = new Conseiller(0, '', '', '', '', '', '', null, '');
  }
  SortconselorbynumberOfid(obj1: number, obj2: number): number {
    const a = obj1;
    const b = obj2;
    return a > b ? 1 : -1;
  }
  ngOnInit() {
    this.addAgentinlist(); }
    addAgentinlist() {
    this.myAgentListservice.getAll().subscribe(data => {
      this.myAgentList = data;
      });

    return this.myAgentList.sort((obj1, obj2) =>
      this.SortconselorbynumberOfid(obj1.cons_id, obj2.cons_id));


  }
  iAddAConsultant() {
    this.myAgentListservice.addCounselor(this.myNewAdvisor).subscribe(data => {
      this.myAgentList = data;


    });
    this.myAgentList.sort((obj1, obj2) =>
    this.SortconselorbynumberOfid(obj1.cons_id, obj2.cons_id));
    this.ngOnInit();
  }
  ngOnDestroy() {}
}
