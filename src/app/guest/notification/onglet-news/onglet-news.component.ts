import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onglet-news',
  templateUrl: './onglet-news.component.html',
  styleUrls: ['./onglet-news.component.css']
})
export class OngletNewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    interface news {
      name:    string;
      age:     number;
      created: Date;
    }

    var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2019-05-24&' +
          'sortBy=popularity&' +
          'apiKey=e6986c8f1acb4356b13cdda13e281d73';

    var responseNews;

    var req = new Request(url);

    fetch(req).then(function(response) {
        console.log(response.json());
    })
  }

}
