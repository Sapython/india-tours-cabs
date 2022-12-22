import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxiBookingPageRoutingModule } from './taxi-booking-routing.module';

import { TaxiBookingPage } from './taxi-booking.page';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxiBookingPageRoutingModule
  ],
  declarations: [TaxiBookingPage,CarsComponent]
})
export class TaxiBookingPageModule {}
