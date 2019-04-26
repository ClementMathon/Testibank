import { Component, OnInit, Input } from '@angular/core';
import {Client2} from 'src/model/client2';


@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})


export class ClientDetailComponent implements OnInit {
  @Input() client: Client2;
  constructor() { }

  ngOnInit() {
  }

}
