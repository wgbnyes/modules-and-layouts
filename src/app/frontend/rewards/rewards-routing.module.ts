import { LayoutRewardsComponent } from './rewards-shared/components/layout-rewards/layout-rewards.component';
import { HomeRewardsComponent } from './home-rewards/home-rewards.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: LayoutRewardsComponent, children: [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: HomeRewardsComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardsRoutingModule { }
