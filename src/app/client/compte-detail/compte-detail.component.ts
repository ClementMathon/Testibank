import { Component, OnInit, Input } from '@angular/core';
import { Compte } from 'src/model/compte';

@Component({
  selector: 'app-compte-detail',
  templateUrl: './compte-detail.component.html',
  styleUrls: ['./compte-detail.component.css']
})
export class CompteDetailComponent implements OnInit {
  @Input() compte: Compte;

  constructor() { }

  ngOnInit() {
  }

}
