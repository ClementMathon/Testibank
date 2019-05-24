
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FakeServiceConseillerService} from '../../../../model/fake-service-conseiller.service';
import {Conseiller} from '../../../../model/conseiller';
import { of } from 'rxjs';
@Component({
  selector: 'app-detailmodifieragent',
  templateUrl: './detailmodifieragent.component.html',
  styleUrls: ['./detailmodifieragent.component.css'],
})
export class DetailmodifieragentComponent implements OnInit, OnDestroy {
  agentselectionner: any = [];
  myAgentList: {};
  constructor(
    private route: ActivatedRoute,
    private route1: Router,
    public myAgentListservice: FakeServiceConseillerService,
    private location: Location
  ) {

    this.route1.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getAgent();
      }
    });
  }
  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myAgentListservice.GetCounselorByMle(id).subscribe((data: {}) => {
      this.agentselectionner = data;
    });
  }
  ngOnInit() {

     return this.myAgentListservice.getAll().subscribe((data: {}) => {
       this.myAgentList = data;
       this.getAgent();

     });

  }
  ngOnDestroy(): void {}
  modifConsultant() {
    this.myAgentListservice.ModifCounselor(this.agentselectionner);
    this.ngOnInit();
  }
}


