import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductManageFormComponent } from './product-manage-form.component';
import { ProductManageService } from './services/product-manage.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductManageFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule],
  providers: [
    ProductManageService
  ],
  exports: [ProductManageFormComponent]
})
export class ProductManageFormModule { }
