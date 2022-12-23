import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductManageFormModule } from '../module/product-manage-form/product-manage-form.module';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ProductManageFormModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { 
  getComponent(){
    return NavbarComponent;
  }
}
