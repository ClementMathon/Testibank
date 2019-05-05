import { Component, OnInit } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [FakeServiceConseillerService]
})
export class ManagerComponent implements OnInit {
  decale: boolean[];
  indicetrue: number;

  constructor() {
    this.decale = [true, false, false, false, false, false];
  }

  ngOnInit() {}
  mychoice(choixmenu: number) {
    this.indicetrue = this.decale.findIndex(it => it === true);
    this.decale[this.indicetrue] = false;
    this.decale[choixmenu] = true;
  }
  calculateclass() {
    return {
      choixAction: true,
      choixActionwidth1: this.decale[1],
      choixActionwidth2: this.decale[2],
      choixActionwidth3: this.decale[3],
      choixActionwidth4: this.decale[4],
      choixActionwidth5: this.decale[5]
    };
  }
}
