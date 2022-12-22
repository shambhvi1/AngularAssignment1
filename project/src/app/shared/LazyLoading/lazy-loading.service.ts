import { Injectable, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModule, createNgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;

  constructor(private injector: Injector) { }

  lazyload(){
    import('../../core/core.module').then((module) => {
    const lazymodule =module['CoreModule'];
    let moduleRef: NgModuleRef<any>;
    moduleRef =createNgModule(lazymodule, this.injector);
    const component= moduleRef.instance.getComponent();
    this.container.createComponent(component, { ngModuleRef: moduleRef} );
  });
}
}
