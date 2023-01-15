import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
const Components = [HeaderComponent]


@NgModule({
  declarations: [
    Components
  ],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule
  ],
  exports:Components
})
export class WidgetsModule { }
