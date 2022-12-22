import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.page.html',
  styleUrls: ['./booking-history.page.scss'],
})
export class BookingHistoryPage implements OnInit {
  section1: boolean = true;
  section2: boolean = false;
  constructor() {}

  ngOnInit() {}
  cfr() {
    this.section2 = !this.section2;
  }
  details() {
    this.section2 = !this.section2;
  }
}
