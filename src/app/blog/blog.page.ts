import { Component, OnInit } from '@angular/core';
import { DataProvidersService } from '../services/dataProviders/data-providers.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  constructor(public dataprovider: DataProvidersService) { }

  ngOnInit() {
  }

  data = [
    {
      image: "assets/img/indiagate.png",
      title: "8 Waterfalls in Jaipur to visit this year",
      body: "Yes, there are waterfalls near Jaipur, even through, almost..",
      author: "Jatin Chabbra",
      date: "October 9th,2022"
    },
    {
      image: "assets/img/escort.png",
      title: "8 Waterfalls in Jaipur to visit this year",
      body: "Yes, there are waterfalls near Jaipur, even through, almost..",
      author: "Jatin Chabbra",
      date: "October 9th,2022"
    },
    {
      image: "assets/img/gaitor.png",
      title: "8 Waterfalls in Jaipur to visit this year",
      body: "Yes, there are waterfalls near Jaipur, even through, almost..",
      author: "Jatin Chabbra",
      date: "October 9th,2022"
    },
  ]

}
