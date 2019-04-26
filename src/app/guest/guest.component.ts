import { Component, OnInit } from '@angular/core';
import { Notif } from 'src/model/notif';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
  
})
export class GuestComponent implements OnInit {

  article = new Notif();
  imageSource: string;
  
  
//image = "http://www.legorafi.fr/wp-content/uploads/2019/04/stool-217237_1280-e1556136213851.jpg";


  constructor() { }

  ngOnInit() {
    //this.article.imgSrc = "http://www.legorafi.fr/wp-content/uploads/2019/04/stool-217237_1280-e1556136213851.jpg";
    this.imageSource = this.article.imgSrc;
  }

}
