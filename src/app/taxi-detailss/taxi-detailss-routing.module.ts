import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarssComponent } from './carss/carss.component';

import { TaxiDetailssPage } from './taxi-detailss.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiDetailssPage
  },
  {
    path: 'carss',
    component: CarssComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxiDetailssPageRoutingModule {}
