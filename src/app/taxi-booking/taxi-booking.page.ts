import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taxi-booking',
  templateUrl: './taxi-booking.page.html',
  styleUrls: ['./taxi-booking.page.scss'],
})
export class TaxiBookingPage implements OnInit {
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
