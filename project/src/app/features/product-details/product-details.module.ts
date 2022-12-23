import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListService } from '../product-list/services/product-list.service';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductDetailsComponent
  ],
  providers: [ProductListService]
})
export class ProductDetailsModule { }
