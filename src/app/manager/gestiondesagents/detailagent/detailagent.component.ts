import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Location} from '@angular/common';
import {FakeServiceConseillerService} from '../../../../model/fake-service-conseiller.service';
import {Conseiller} from '../../../../model/conseiller';
@Component({
  selector: 'app-detailagent',
  templateUrl: './detailagent.component.html',
  styleUrls: ['./detailagent.component.scss'],
})
export class DetailagentComponent implements OnInit, OnDestroy {
  agentselectionner: any = [];
  constructor(
    private route: ActivatedRoute,

    private myAgentListservice: FakeServiceConseillerService,
    private location: Location
  ) {

    this.route.paramMap.subscribe(paramMap => {
      this.getAgent();
    });
    /*   this.route1.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.getAgent();
      }
    });*/
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
}
