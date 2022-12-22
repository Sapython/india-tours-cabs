import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  section2:boolean = false
  constructor() { }

  ngOnInit() {}

  displaySection2(){
    this.section2 =! this.section2;
  }
}
