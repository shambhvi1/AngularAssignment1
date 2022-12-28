import { Injectable, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModule, createNgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {
  

  constructor(private injector: Injector) { }

  lazyload(container: ViewContainerRef) {
    import('../../module/product-manage-form/product-manage-form.module').then((module) => {
    const lazymodule =module['ProductManageFormModule'];
    let moduleRef: NgModuleRef<any>;
    moduleRef =createNgModule(lazymodule, this.injector);
    const component= moduleRef.instance.getComponent();
    container.createComponent(component, { ngModuleRef: moduleRef} );
   
  });
  
}
}
