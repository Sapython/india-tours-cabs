import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetStartedPage } from './get-started.page';

const routes: Routes = [
  {
    path: '',
    component: GetStartedPage
  },
  {
    path: 'start',
    component: GetStartedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetStartedPageRoutingModule {}
