import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  commandeChequier() {
    this.myAgentListservice.deleteCounselor(this.agentselectionner).subscribe(data => {
      this.myAgentList = data;


    });
}
