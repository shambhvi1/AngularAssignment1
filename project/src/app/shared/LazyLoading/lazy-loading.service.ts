import { Compiler, Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LazyLoadingService {
  private componenttRefs = {
    myFirstLazyModuleId: import('../../core/core.module'),
};

  constructor(private compiler: Compiler,
    private injector: Injector,) { }

    async loadComponent(moduleId, container) {

      let ref;
      try {
          const moduleObj = await this.componenttRefs[moduleId];
          const module = moduleObj[Object.keys(moduleObj)[0]];
          const moduleFactory = await this.compiler.compileModuleAsync(module);
          const moduleRef: any = moduleFactory.create(this.injector);
          const componentFactory = moduleRef.instance.resolveComponent();
          ref = container.createComponent(componentFactory, null, moduleRef.injector);
      } catch (e) {
          console.error(e);
      }
      return ref;

  }
  
}
