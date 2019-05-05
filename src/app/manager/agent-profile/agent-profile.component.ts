import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
import { Conseiller } from 'src/model/conseiller';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit, OnDestroy {
  myNewAdvisor: Conseiller;

  constructor(public myAgentListservice: FakeServiceConseillerService) {
    this.myNewAdvisor = new Conseiller(0, '', '', '', '', '', '', null, '');
  }

  ngOnInit() {}
  iAddAConsultant() {
    this.myAgentListservice.addCounselor(this.myNewAdvisor);
    this.myAgentListservice.decale[1] = false;
    this.myAgentListservice.decale[0] = true;
  }
  ngOnDestroy() {}
}
