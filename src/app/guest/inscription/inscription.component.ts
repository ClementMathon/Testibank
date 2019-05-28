import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/model/client2';
import {ClientService} from "src/model/client.service"
import { Conseiller } from 'src/model/conseiller';
import { FakeServiceConseillerService } from 'src/model/fake-service-conseiller.service';
import {Manager} from 'src/model/Manager';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newClient: Client2;
  myNewAdvisor: Conseiller;
  newAdmin: Manager;
  constructor(private myClientService : ClientService, private myConseillerService : FakeServiceConseillerService) { 
  this.newClient = new Client2();

  this.newClient.clientAdresse = "";
  this.newClient.clientCp = 12345;
  this.newClient.clientEmail = "mail";
  this.newClient.clientId = 0;
  this.newClient.clientMdp = "pwd";
  this.newClient.clientNom = "Lovelace";
  this.newClient.clientPrenom = "Ada";
  this.newClient.clientSituation = "e";
  this.newClient.clientTel = "0123456789";
  this.newClient.clientVille = "oui";
  this.newClient.client_nbEnfant = 0;
  this.newClient.conseiller = this.myNewAdvisor;
  }

   

  ngOnInit() {
    this.myClientService.addClient(this.newClient);
  }

  AddClient(){
    this.myClientService.addClient(this.newClient);
  }

  addConseiller(){
    this.myConseillerService.addCounselor(this.myNewAdvisor);
  }
  

}
