import { Component, OnInit } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [FakeServiceConseillerService]
})
export class ManagerComponent implements OnInit {

  indicetrue: number;

  constructor(private router: Router, public myAgentListservice: FakeServiceConseillerService) {

  }

  ngOnInit() {






  }
  mychoice(choixmenu: number) {
    this.indicetrue = this.myAgentListservice.decale.findIndex(it => it === true);
    this.myAgentListservice.decale[this.indicetrue] = false;
    this.myAgentListservice.decale[choixmenu] = true;
  }
  calculateclass() {
    return {
      choixAction: true,
      choixActionwidth1: this.myAgentListservice.decale[1],
      choixActionwidth2: this.myAgentListservice.decale[2],
      choixActionwidth3: this.myAgentListservice.decale[3],
      choixActionwidth4: this.myAgentListservice.decale[4],
      choixActionwidth5: this.myAgentListservice.decale[5]
    };
  }
}
