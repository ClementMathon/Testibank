import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import { ClientService } from 'src/model/client.service';
import { Client2 } from 'src/model/client2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  client : Client2;

  situations = ['Celibataire', 'Marie(e)',
  'Veuf/veuve', 'Divorce', 'En cours de Brexit', 'PACse', 'Marie a un raton laveur'];

  //model = new Client(8, 'pwd', 'Trump', 'Donald', 'iLuvGoldenShower@potus.com', 706060656, '28 rue de GK', 69007, 'New York', this.situations[6], 0, 0 );

  submitted = false;

  
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client2;
    return this.getClientByClientId(4);
  }
  onSubmit() { 
    this.submitted = true; 
    this.clientService.updateClient(this.client);
    console.log(this.client);
  }

  getClientByClientId (id : number) {
    this.clientService.getClientById(id).subscribe((data : Client2 )=> {
      this.client = data;});
  }


  
}
