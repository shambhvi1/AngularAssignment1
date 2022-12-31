import { Injectable, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModule, createNgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {
  

  constructor(private injector: Injector) { }

  lazyload(container: ViewContainerRef, modulePath: string, moduleName: string) {
    import(modulePath).then((module) => {
    const lazymodule =module[moduleName];
    let moduleRef: NgModuleRef<any>;
    moduleRef =createNgModule(lazymodule, this.injector);
    const component= moduleRef.instance.getComponent();
    container.createComponent(component, { ngModuleRef: moduleRef} );
   
  });
  
}
}
