import { Component } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ProductListService } from './services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  filteredProducts: Product[] = [];
  products: Product[] = [];
  errorMessage = '';
  imageWidth = 50;
  imageMargin = 2;

  constructor(private productService: ProductListService) { }
  ngOnInit(): void {
    this.productService.getAllproducts().subscribe({
      next: products => {
        this.products= products;
        this.filteredProducts=products;
        console.log(products);
        },
      error: err => this.errorMessage = err
    })
    
  }

}
