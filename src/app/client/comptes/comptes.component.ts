import { Component, OnInit } from '@angular/core';

import { Compte } from 'src/model/compte';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  comptes: Compte[];
  selectedCompte: Compte;

  constructor(private compteService: FakeServiceCompteService) { }

  ngOnInit() {
    this.getCompte();
  } 

  onSelect(compte: Compte): void {
    this.selectedCompte = compte;
  }  

  getCompte(): void {
    this.comptes = this.compteService.getComptesDuClient(1);
  }
  

}
