import { LoginBaseComponent } from './login-base/login-base.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { RememberPasswordComponent } from './remember-password/remember-password.component';

const routes: Routes = [
  { path: '', component: LoginBaseComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'remember', component: RememberPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
