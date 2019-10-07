import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginBaseComponent } from './login-base/login-base.component';
import { SignupComponent } from './signup/signup.component';
import { RememberPasswordComponent } from './remember-password/remember-password.component';


@NgModule({
  declarations: [
    LoginBaseComponent,
    SignupComponent,
    RememberPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
