import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule,  } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';
import { CarsComponent } from './cars/cars.component';
import { BookedComponent } from './booked/booked.component';

@NgModule({
  declarations: [
    PaymentPage,
    CarsComponent,
    BookedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentPageRoutingModule,
  ],
  exports: [
    CarsComponent,
    BookedComponent
  ]
})
export class PaymentPageModule {}
