import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxiDetailssPageRoutingModule } from './taxi-detailss-routing.module';

import { TaxiDetailssPage } from './taxi-detailss.page';
import { CarssComponent } from './carss/carss.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxiDetailssPageRoutingModule
  ],
  declarations: [TaxiDetailssPage,CarssComponent]
})
export class TaxiDetailssPageModule {}
