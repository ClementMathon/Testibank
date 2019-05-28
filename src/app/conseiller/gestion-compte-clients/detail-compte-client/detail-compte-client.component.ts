import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/model/compte';


@Component({
  selector: 'app-detail-compte-client',
  templateUrl: './detail-compte-client.component.html',
  styleUrls: ['./detail-compte-client.component.css']
})
export class DetailCompteClientComponent implements OnInit {
  @Input() displayedCompte: Compte;
  constructor() { }

  ngOnInit() {
  }

}
