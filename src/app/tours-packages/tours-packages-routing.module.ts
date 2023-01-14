import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToursPackagesPage } from './tours-packages.page';

const routes: Routes = [
  {
    path: '',
    component: ToursPackagesPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToursPackagesPageRoutingModule {}
