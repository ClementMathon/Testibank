import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  client: Client = {
  id : 1,
	motDePasse : 'motDePasse',
  nom: 'César',
  prenom : 'Julio',
	email : 'julio.caesar@rome.it',
	telephone : '0123456789',
	adresse : 'Capitole',
	codePostale : 12000,
	ville : 'Roma',
	situation : 'empereur',
	nombreEnfant: 2512,
	conseiller : 1,
  };

  constructor() { }

  ngOnInit() {
  }

}
