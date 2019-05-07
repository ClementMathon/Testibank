import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  situations = ['Celibataire', 'Marie(e)',
  'Veuf/veuve', 'Divorce', 'En cours de Brexit', 'PACse', 'Marie a un raton laveur'];

  model = new Client(8, 'pwd', 'Trump', 'Donald', 'iLuvGoldenShower@potus.com', 706060656, '28 rue de GK', 69007, 'New York', this.situations[6], 0, 0 );

  submitted = false;
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}
