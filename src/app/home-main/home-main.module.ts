import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMainPageRoutingModule } from './home-main-routing.module';

import { HomeMainPage } from './home-main.page';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMainPageRoutingModule,
    WidgetsModule
  ],
  declarations: [HomeMainPage]
})
export class HomeMainPageModule {}
