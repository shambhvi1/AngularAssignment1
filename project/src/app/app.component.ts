import {  Component, Injector, NgModuleRef, ViewChild, ViewContainerRef, createNgModuleRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  @ViewChild('container', {read: ViewContainerRef})
  container!: ViewContainerRef;

  constructor(private injector: Injector) {}
  
lazyload(){
      import('./core/core.module').then((module) => {
      const lazymodule =module['CoreModule'];
      let moduleRef: NgModuleRef<any>;
      moduleRef =createNgModuleRef(lazymodule, this.injector);
      const component= moduleRef.instance.getComponent();
      this.container.createComponent(component, { ngModuleRef: moduleRef} );
    });
}

}
