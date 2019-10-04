import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'rewards', loadChildren: () => import('./frontend/rewards/rewards.module').then(m => m.RewardsModule) },
  { path: 'catalog', loadChildren: () => import('./frontend/catalog/catalog.module').then(m => m.CatalogModule) },
  { path: '**', loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
