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

  submitted = false;

  
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client2;
    return this.getClientByClientId(3);
  }
  onSubmit() { 
    this.submitted = true; 
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
  }

  getClientByClientId (id : number) {
    this.clientService.getClientById(id).subscribe((data : Client2 )=> {
      this.client = data;});
  }


  
}
