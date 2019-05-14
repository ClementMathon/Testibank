import { Component, OnInit } from '@angular/core';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { Compte } from 'src/model/compte';

@Component({
  selector: 'app-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.css']
})
export class VirementComponent implements OnInit {
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
   this.comptes = this.compteService.getComptesDuClient(2);
  }
}
