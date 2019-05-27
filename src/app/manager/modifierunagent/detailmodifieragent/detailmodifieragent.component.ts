
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FakeServiceConseillerService} from '../../../../model/fake-service-conseiller.service';
import {Conseiller} from '../../../../model/conseiller';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-detailmodifieragent',
  templateUrl: './detailmodifieragent.component.html',
  styleUrls: ['./detailmodifieragent.component.css'],
})
export class DetailmodifieragentComponent implements OnInit, OnDestroy {
  agentselectionner: Observable<Conseiller>;
  myAgentList: any = [];
  agent: Conseiller;
  constructor(
    private route: ActivatedRoute,
    private route1: Router,
    public myAgentListservice: FakeServiceConseillerService,
    private location: Location
  ) {
    this.route1.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
      }
    });
  }
  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.agentselectionner = this.myAgentListservice.GetCounselorByMle(id);
  }
  ngOnInit() {
  this.getAgent();
  return this.myAgentListservice.getAll().subscribe((data: {}) => {
      this.myAgentList = data;

    });

  }
  ngOnDestroy(): void {}
  modifConsultant() {
    this.agentselectionner.subscribe((agent) => this.agent = agent);
    this.myAgentListservice.ModifCounselor(this.agent);
    this.ngOnInit();
  }
}


