
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FakeServiceConseillerService} from '../../../../model/fake-service-conseiller.service';
import {Conseiller} from '../../../../model/conseiller';
@Component({
  selector: 'app-detailmodifieragent',
  templateUrl: './detailmodifieragent.component.html',
  styleUrls: ['./detailmodifieragent.component.css'],
})
export class DetailmodifieragentComponent implements OnInit, OnDestroy {
  agentselectionner: Conseiller;
  constructor(
    private route: ActivatedRoute,
    private route1: Router,
    private myAgentListservice: FakeServiceConseillerService,
    private location: Location
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
    this.route1.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getAgent();
      }
    });
  }
  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.agentselectionner = this.myAgentListservice.GetCounselorByMle(id);
  }
  ngOnInit() {
    this.getAgent();
  }
  ngOnDestroy(): void {}
  modifConsultant() {
    this.myAgentListservice.ModifCounselor(this.agentselectionner);
  }
}


