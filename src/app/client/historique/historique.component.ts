import { Component, OnInit } from '@angular/core';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { Compte } from 'src/model/compte';
import { Transactions } from 'src/model/transactions';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  transactions: Transactions[];
  comptes: Compte[];
  selectedCompte: Compte;
  compteId : number;

  constructor(private compteService: FakeServiceCompteService) { }

  ngOnInit() {
    return this.getComptesByClientId(2);
  }

  onSelect(compte: Compte) {
    this.selectedCompte = compte;
    this.compteId  = compte.compteId;
    this.compteService.getTransactionsDuCompte(this.compteId).subscribe((data : Transactions[] )=> {
      this.transactions = data;});
  }
  
  getComptesByClientId (id : number) {
    this.compteService.getComptesDuClient(id).subscribe((data : Compte[] )=> {
      this.comptes = data;});
  }
}
