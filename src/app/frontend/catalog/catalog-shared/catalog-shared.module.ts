import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCatalogComponent } from './components/layout-catalog/layout-catalog.component';

@NgModule({
  declarations: [
    LayoutCatalogComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    LayoutCatalogComponent
  ]
})
export class CatalogSharedModule { }
