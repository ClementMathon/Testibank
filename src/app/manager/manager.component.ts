import { Component, OnInit } from '@angular/core';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
  providers: [FakeServiceConseillerService]
})
export class ManagerComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {
  }

}
