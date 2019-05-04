import { Component, OnInit } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [FakeServiceConseillerService]
})
export class ManagerComponent implements OnInit {
  choix: boolean[] = [];
indicetrue: number;

  constructor() {
    this.choix = [true, false, false, false, false, false];
  }

  ngOnInit() {
  }
mychoice(choixmenu: number) {
this.indicetrue = this.choix.findIndex((it) => it === true );
this.choix[this.indicetrue] = false;
this.choix[choixmenu] = true;

}
}
