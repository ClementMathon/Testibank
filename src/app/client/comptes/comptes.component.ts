import { Component, OnInit } from '@angular/core';

import { Compte } from 'src/model/compte';
import { FakeServiceCompteService } from 'src/model/fake-service-compte.service';
import { Observable } from 'rxjs';

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
   return this.getComptesByClientId(6);
  }

  onSelect(compte: Compte): void {
    this.selectedCompte = compte;
  }

  getComptesList() {
    this.compteService.getAll().subscribe((data : Compte[] )=> {
      this.comptes = data;});
  }  
  getComptesByClientId (id : number) {
    this.compteService.getComptesDuClient(id).subscribe((data : Compte[] )=> {
      this.comptes = data;});
  }
}
