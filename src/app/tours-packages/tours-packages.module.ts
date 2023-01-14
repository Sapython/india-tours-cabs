import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToursPackagesPageRoutingModule } from './tours-packages-routing.module';

import { ToursPackagesPage } from './tours-packages.page';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToursPackagesPageRoutingModule,
    SwiperModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ToursPackagesPage]
})
export class ToursPackagesPageModule {}
