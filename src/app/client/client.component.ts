import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client = {
    id: 1,
    nom: 'Julio'
  };

  constructor() { }

  ngOnInit() {
  }

}
