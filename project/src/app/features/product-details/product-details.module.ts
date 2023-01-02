import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { ProductListService } from '../product-list/services/product-list.service';
import { ProductDetailsRoutingModule } from './product-details-routing.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,ProductDetailsRoutingModule
  ],
  exports: [
    ProductDetailsComponent
  ],
  providers: [ProductListService]
})
export class ProductDetailsModule { }
