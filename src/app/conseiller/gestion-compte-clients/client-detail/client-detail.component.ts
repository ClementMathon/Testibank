import { Component, OnInit, Input } from '@angular/core';
import {Client} from 'src/model/client';
import { Compte } from 'src/model/compte';
import {FakeServiceCompteService} from '../../../../model/fake-service-compte.service';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})


export class ClientDetailComponent implements OnInit {
  @Input() client: Client;

  //compteDuClient : Client;

  comptesDuClient : Compte[]; 

  constructor( private compteClientService: FakeServiceCompteService) { }


  getComptesClient(): void {
    this.comptesDuClient = this.compteClientService.getComptesDuClient(1);
  }

  ngOnInit() {
    this.getComptesClient();
  }




}
