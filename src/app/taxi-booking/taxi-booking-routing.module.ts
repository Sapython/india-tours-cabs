import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';

import { TaxiBookingPage } from './taxi-booking.page';

const routes: Routes = [
   {
    path: '',
    component: TaxiBookingPage
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxiBookingPageRoutingModule {}
