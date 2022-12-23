import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild(ProductManageFormComponent) addview !:ProductManageFormComponent
  ngAfterViewInit(): void 
  {
  }
  title='navbar';
  openAddForm(){
    this.addview.open();
  }
}


