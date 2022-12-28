import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductManageFormModule } from '../module/product-manage-form/product-manage-form.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { 
 
}
