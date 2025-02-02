import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPagePageRoutingModule } from './review-page-routing.module';

import { ReviewPagePage } from './review-page.page';
import { ReviewComponent } from './review/review.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPagePageRoutingModule,
    
  ],
  declarations: [ReviewPagePage,ReviewComponent]
})
export class ReviewPagePageModule {}
