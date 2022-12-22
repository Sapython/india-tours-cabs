import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookedComponent } from './booked/booked.component';
import { CarsComponent } from './cars/cars.component';

import { PaymentPage } from './payment.page';

const routes: Routes = [
  {
    path: '',
    // component: PaymentPage
    component: CarsComponent
    // component: BookedComponent
  },
  {
    path: 'booked',
    component: BookedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentPageRoutingModule {}
