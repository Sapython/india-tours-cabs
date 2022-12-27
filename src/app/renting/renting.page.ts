import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renting',
  templateUrl: './renting.page.html',
  styleUrls: ['./renting.page.scss'],
})
export class RentingPage implements OnInit {
  upload: boolean = false
  bntStyle: any;
  constructor() { }

  ngOnInit() {
  }

  driver(){
    this.upload =! this.upload;
    this.bntStyle = 'btn-change'; // for change the styling
  }
}
