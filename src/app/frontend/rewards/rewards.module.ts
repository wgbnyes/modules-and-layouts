import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsRoutingModule } from './rewards-routing.module';
import { HomeRewardsComponent } from './home-rewards/home-rewards.component';
import { RewardsSharedModule } from './rewards-shared/rewards-shared.module';

@NgModule({
  declarations: [
    HomeRewardsComponent,
  ],
  imports: [
    CommonModule,
    RewardsRoutingModule,
    RewardsSharedModule
  ]
})
export class RewardsModule { }
