import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './services/product-list.service';
import { ProductManageFormModule } from 'src/app/module/product-manage-form/product-manage-form.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ProductManageFormModule
  ],
  providers: [ProductListService]
})
export class ProductListModule { }
