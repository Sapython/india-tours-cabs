import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataProvidersService } from 'src/app/services/dataProviders/data-providers.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: String = '';
  constructor(public router:Router,private navController: NavController, public dataProvider:DataProvidersService) { }

  ngOnInit() {}

  back(){
    this.navController.setDirection('back');
    const firstRoute = this.router.url;
    this.navController.pop()
    setTimeout(() => {
      console.log("navigated",firstRoute,this.router.url);
      if  (firstRoute == this.router.url){
        this.navController.navigateBack('/home');
      }
    },10)
  }

  notification(){
    this.navController.navigateBack('/notifications');
  }

  profile(){
    this.navController.navigateBack('/profile');
  }

}
