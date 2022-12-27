import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RentingPageRoutingModule } from './renting-routing.module';

import { RentingPage } from './renting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RentingPageRoutingModule
  ],
  declarations: [RentingPage]
})
export class RentingPageModule {}
