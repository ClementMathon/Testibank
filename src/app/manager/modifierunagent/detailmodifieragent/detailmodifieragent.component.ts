
import {Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
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
  @Output() voted = new EventEmitter<boolean>();
  agentselectionner: Conseiller;
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
  }
  ngOnInit(): void {
    this.getAgent();
  }

  getAgent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.myAgentListservice.GetCounselorByMle(id).subscribe(data => {
    this.agentselectionner = data;
  });
  }
  ngOnDestroy(): void {}
  modifConsultant() {

    this.myAgentListservice.ModifCounselor(this.agentselectionner ).subscribe();
    this.voted.emit(false);
    
  }

}


