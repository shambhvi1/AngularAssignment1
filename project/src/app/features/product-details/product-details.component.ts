import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductDetailsService } from './service/product-details.service';
import { ProductDetailsConstant } from './constants/core.constant';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  pageTitle = 'Product Detail';
  constant = ProductDetailsConstant;
  product: Product={
    id: '',
    productName: '',
    productCode: '',
    releaseDate: '',
    price: 0,
    description: '',
    imageUrl: ''
  };

  constructor(private route: ActivatedRoute, private productService: ProductDetailsService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          //call api
          this.productService.getProduct(id).
          subscribe({
            next: (response) => {
              this.product = response;
            }
          });
  }}})}
          
            
     
  

}
