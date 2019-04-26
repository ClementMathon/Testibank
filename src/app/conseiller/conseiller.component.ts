import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conseiller',
  templateUrl: './conseiller.component.html',
  styleUrls: ['./conseiller.component.css']
})
export class ConseillerComponent implements OnInit {
value = 0; // for some reason it opens the 0 tag on load
  constructor() { }

  ngOnInit() {
  }

}
