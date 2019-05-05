import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/model/compte';
import {FakeServiceCompteService} from '../../../../model/fake-service-compte.service';

@Component({
  selector: 'app-compte-client-detail',
  templateUrl: './compte-client-detail.component.html',
  styleUrls: ['./compte-client-detail.component.css']
})
export class CompteClientDetailComponent implements OnInit {
  @Input() client: Compte;

  constructor() { }

  ngOnInit() {
  }

}
