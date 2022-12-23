import { Component, ViewChild } from '@angular/core';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  title='navbar';
  @ViewChild(ProductManageFormComponent) addview !:ProductManageFormComponent

  openAddForm = () => 
  { this.addview.open();}
}


