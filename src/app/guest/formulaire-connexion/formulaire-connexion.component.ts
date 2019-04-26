import { Component, OnInit } from '@angular/core';
import {User} from './FakeUser';
  import { from } from 'rxjs';

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
  }

  newFakeUser(){
    this.model = new User();
  }

  ngOnInit() {
  }

}
