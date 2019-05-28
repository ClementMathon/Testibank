import { Component, OnInit } from '@angular/core';
import {User} from './FakeUser';
  import { from } from 'rxjs';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { Auth} from 'src/model/auth'
import {ClientService} from "src/model/client.service"
import { Router } from '@angular/router'

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.component.html',
  styleUrls: ['./formulaire-connexion.component.css']
})
export class FormulaireConnexionComponent implements OnInit {

  auth : Auth;
  constructor(private myClientService : ClientService, private route : Router) {
    
  }

  //model = new User();

  //submited = false;

  verif(){
    this.auth = new Auth(this.myClientService, this.route);
    this.auth.whoIsIt(this.myClientService , this.auth.inputId , this.auth.inputPwd);
  }

  ngOnInit() {
  }

}
