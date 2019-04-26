import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gestiondesagents',
  templateUrl: './gestiondesagents.component.html',
  styleUrls: ['./gestiondesagents.component.scss']
})
export class GestiondesagentsComponent implements OnInit {
  searchText = '';
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];
  constructor() { }

  ngOnInit() {
  }

}
