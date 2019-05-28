import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/model/client.service';
import { Client2 } from 'src/model/client2';
import { NotificationService } from 'src/app/notification.service';
import { Notification } from 'src/model/notifications';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  client : Client2;
  notifCommandeChequier: Notification ;
  contenu: String;

  constructor(private clientService: ClientService, private  notificationService: NotificationService) { 





  }

  ngOnInit() {
    this.client = new Client2;
    return this.getClientByClientId(3);
  }
  getClientByClientId (id : number) {
    this.clientService.getClientById(id).subscribe((data : Client2 )=> {
      this.client = data;});
  }
  
  commandeChequier() {
    this.contenu= "Chéquier commandé par le client" + this.client.clientId;
    this.notifCommandeChequier= new Notification(this.contenu,this.client);
    const notifObs = this.notificationService.notifCommandeChequier(this.notifCommandeChequier);
    notifObs.subscribe((data)=>{console.log(data);},
      (error)=>{console.log(error);}
    );
    console.log(this.notifCommandeChequier);
    };
}
