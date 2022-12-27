import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  section2:boolean = false;
  popup:boolean = true
  @ViewChild('modal') Modal:any
  constructor(private route: Router) { }

  ngOnInit() {}

  displaySection2(){
    this.section2 =! this.section2;
  }

  currentHeight:number = 0.3;

  open(){
    this.Modal.setCurrentBreakpoint(0.7)​
  }


  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  popupOpen(){
    this.popup = false;
    this.route.navigate(['/payment/booked']);
  }
}
