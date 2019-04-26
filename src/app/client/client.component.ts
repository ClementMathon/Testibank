import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import { Client2 } from 'src/model/client2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client: Client2 = {
    id: '1',
    nom: 'Julio'
  };

  constructor() { }

  ngOnInit() {
  }

}
