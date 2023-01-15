import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    AboutUsComponent,
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    WidgetsModule,
    FormsModule,
    IonicModule,
  ]
})
export class AboutUsModule { }
