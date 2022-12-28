import { Component, ViewChild, AfterViewInit, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';
import { LazyLoadingService } from 'src/app/shared/LazyLoading/lazy-loading.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('manageFormContainerRef', {read: ViewContainerRef})
  manageFormContainerRef!: ViewContainerRef;
  constructor(private lazyLoadService: LazyLoadingService) {}
  ngAfterViewInit(): void 
  {
  }
  title='navbar';
  openAddForm(){
    this.lazyLoadService.lazyload(this.manageFormContainerRef);
    debugger;
    const compRef = this.manageFormContainerRef.createComponent(ProductManageFormComponent);
    compRef.instance.LoadEditData('');
  }
}


