import { Component, OnInit } from '@angular/core';
import { COMPTES } from 'src/model/mock-compte';
import { Compte } from 'src/model/compte';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  comptes= COMPTES;
  selectedCompte: Compte;

  constructor() { }

  ngOnInit() {
  }

  onSelect(compte: Compte): void {
    this.selectedCompte = compte;
  }  
  

}
