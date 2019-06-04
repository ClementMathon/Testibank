import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/model/client2';
import {ClientService} from "src/model/client.service"
import { Conseiller } from 'src/model/conseiller';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';

import { Compte } from 'src/model/compte';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newClient: Client2;
  myNewAdvisor: Conseiller;
  

  constructor(private myClientService : ClientService, private myConseillerService : FakeServiceConseillerService  ) {
  this.newClient = new Client2();
  this.myNewAdvisor = new Conseiller(0,"hier","Goodenought","David","aaa@gmail.com","0123456789","la bas",12345,"st-petou");

  this.myNewAdvisor.consDateEmbauche =  "now";
  this.myNewAdvisor.consAdresse = "default";
  this.myNewAdvisor.consCp = 99999;
  this.myNewAdvisor.consVille = "default";
  this.myNewAdvisor.consTel = "0123456789";
  }



  ngOnInit() {

  }

  AddClient(){
    this.myClientService.addClient(this.newClient).subscribe();

  }

  addConseiller(){
    this.myConseillerService.addCounselor(this.myNewAdvisor).subscribe();
  }


}
