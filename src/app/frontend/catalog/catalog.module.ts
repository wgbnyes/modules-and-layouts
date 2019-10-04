import { CatalogSharedModule } from './catalog-shared/catalog-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogHomeComponent } from './catalog-home/catalog-home.component';


@NgModule({
  declarations: [
    CatalogHomeComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CatalogSharedModule
  ]
})
export class CatalogModule { }
