import { Component, OnInit } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
import { Conseiller } from 'src/model/conseiller';


@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.scss']
})
export class AgentProfileComponent implements OnInit {
  myNewAdvisor: Conseiller;
myAgentList: FakeServiceConseillerService;
  constructor() { }

  ngOnInit() {

  }
iAddAConsultant() {

this.myAgentList.addAnAdvisor(this.myNewAdvisor);
}
}
