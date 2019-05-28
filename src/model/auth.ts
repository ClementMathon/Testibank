import { Client2 } from './client2';
import { Conseiller } from './conseiller';
import { Manager } from './manager';
import { Observable, observable } from 'rxjs';
import { ClientService } from './client.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export class Auth{
    client : Client2;
    inputClient : Client2;
    inputId : number;
    inputPwd : string;
    servClient : ClientService;
    constructor(private clientService: ClientService, private router: Router) { }

    getClientByClientId (id : number) : Client2 {
        this.clientService.getClientById(id).subscribe((data : Client2 )=> {
          this.client = data;});
        return(this.client);
      }


    /**
     * whoIsIt
     */
    public whoIsIt(myClientService : ClientService, inputId: number, inputPwd :string){
        
        this.clientService.getClientById(inputId).subscribe((data : Client2 )=> {this.client = data;});

        if (inputPwd == this.client.clientMdp){
            this.router.navigateByUrl('/client');
            
        }
        

        
        
        return (0);
    }
}