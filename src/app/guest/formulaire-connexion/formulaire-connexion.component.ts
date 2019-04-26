import { Component, OnInit } from '@angular/core';
import {User} from './FakeUser';
  import { from } from 'rxjs';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-formulaire-connexion',
  templateUrl: './formulaire-connexion.component.html',
  styleUrls: ['./formulaire-connexion.component.css']
})
export class FormulaireConnexionComponent implements OnInit {

  constructor() { }

  model = new User();

  submited = false;

  onsubmit(){
    this.submited = true;
    this.model.isClient;
  }

  ngOnInit() {
  }

}
