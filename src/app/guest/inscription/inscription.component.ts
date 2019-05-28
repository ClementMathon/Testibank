import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/model/client2';
import {ClientService} from "src/model/client.service"
import { Conseiller } from 'src/model/conseiller';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newClient: Client2;
  constructor(private myClientService : ClientService) { 
    this.newClient = new Client2();
    let c = new Conseiller(0,"","","","","","",0,"");
    this.newClient.clientNom = "";
    this.newClient.clientPrenom = "";
    this.newClient.clientEmail = "";
    this.newClient.clientTel = "";
    this.newClient.clientAdresse = "";
    this.newClient.clientCp = 0;
    this.newClient.clientVille = "";
    this.newClient.clientSituation = "";
    this.newClient.client_nbEnfant = 0;
    this.newClient.clientMdp = "";
    this.newClient.conseiller = c;
    


  }

  ngOnInit() {
   
  }

  AddAClient(){
    this.myClientService.addClient(this.newClient);
  }
  

}
