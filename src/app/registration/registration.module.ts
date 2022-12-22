import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OtpComponent } from './otp/otp.component';
import { ResetComponent } from './reset/reset.component';
import { ForgotComponent } from './forgot/forgot.component';


@NgModule({
  declarations: [
    RegistrationPage,
    LoginComponent,
    SignupComponent,
    OtpComponent,
    ResetComponent,
    ForgotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    SignupComponent
  ]
})
export class RegistrationPageModule {}