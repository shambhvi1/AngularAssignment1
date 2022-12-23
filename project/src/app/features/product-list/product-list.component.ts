import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ProductListService } from './services/product-list.service';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,AfterViewInit {
  
  filteredProducts: Product[] = [];
  products: Product[] = [];
  errorMessage = '';
  imageWidth = 50;
  imageMargin = 2;

  constructor(private productService: ProductListService,
              private router: Router) { }
  @ViewChild(ProductManageFormComponent) addview !:ProductManageFormComponent
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.productService.getAllproducts().subscribe({
      next: products => {
        this.products= products;
        this.filteredProducts=products;
        console.log(products);
        }
    })
    
    
  }
  openEditForm(id: string){

    this.addview.LoadEditData(id);

  }
  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe({
      next: () => {
        this.router.navigate(['home']);
      }
    });
  }

  }
  
  


