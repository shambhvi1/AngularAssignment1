import { ComponentFactory, ComponentFactoryResolver, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [NavbarComponent]
})
export class CoreModule { 
  constructor(private componentFactoryResolver: ComponentFactoryResolver){}

  public resolveComponent(): ComponentFactory<NavbarComponent> {
    return this.componentFactoryResolver.resolveComponentFactory(NavbarComponent);
  }
}
