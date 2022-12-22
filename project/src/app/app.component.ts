import { Compiler, Component, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { LazyLoadingService } from './shared/LazyLoading/lazy-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  
  //   myFirstLazyModuleId: import('./core/core.module'),

  // constructor(private lazyLoadingService: LazyLoadingService){}
	// const myFirstLazyComponent = await this.lazyLoadingService.loadComponent(this.myFirstLazyModuleId, ViewContainerRef);

}
