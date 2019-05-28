import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/model/client.service';
import { Client2 } from 'src/model/client2';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  client : Client2;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client2;
    return this.getClientByClientId(3);
  }
  getClientByClientId (id : number) {
    this.clientService.getClientById(id).subscribe((data : Client2 )=> {
      this.client = data;});
  }
  /*
  commandeChequier() {
    const recipeObs = this.clientService.updateClient(this.client);
    recipeObs.subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    console.log(this.client);


    });*/
}
