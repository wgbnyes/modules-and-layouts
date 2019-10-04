import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutCatalogComponent } from './catalog-shared/components/layout-catalog/layout-catalog.component';
import { CatalogHomeComponent } from './catalog-home/catalog-home.component';

const routes: Routes = [
  { path: '', component: LayoutCatalogComponent, children: [
    { path: '', redirectTo: 'home' },
    { path: 'home', component: CatalogHomeComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
