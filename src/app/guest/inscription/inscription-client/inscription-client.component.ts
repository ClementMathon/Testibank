import { Component, OnInit } from '@angular/core';
import { Client2 } from 'src/model/client2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription-client',
  templateUrl: './inscription-client.component.html',
  styleUrls: ['./inscription-client.component.css']
})
export class InscriptionClientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let client = new Client2();
    
    client.clientNom = "aaa"
  }

}
