import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/model/client2';
import {ClientService} from "src/model/client.service"

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  newClient: Client2;
  constructor(private myClientService : ClientService) { 
    this.newClient = new Client2();



  }

  ngOnInit() {
   
  }

  AddAClient(){
    this.myClientService.addClient(this.newClient);
  }
  

}
