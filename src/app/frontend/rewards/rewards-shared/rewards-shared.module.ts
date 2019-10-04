import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRewardsComponent } from './components/layout-rewards/layout-rewards.component';



@NgModule({
  declarations: [
    LayoutRewardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    LayoutRewardsComponent
  ]
})
export class RewardsSharedModule { }
