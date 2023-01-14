import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { IonicModule } from '@ionic/angular';

import { ToursPageRoutingModule } from './tours-routing.module';

import { ToursPage } from './tours.page';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToursPageRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [ToursPage]
})
export class ToursPageModule {}
