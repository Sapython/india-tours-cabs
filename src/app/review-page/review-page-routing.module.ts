import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPagePage } from './review-page.page';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewPagePage
  },
  {
    path: 'review',
    component: ReviewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPagePageRoutingModule {}
