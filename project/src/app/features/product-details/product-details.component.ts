import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/product.model';
import { ProductDetailsService } from './service/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  pageTitle = 'Product Detail';
  product: Product | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductDetailsService) {
  }

  ngOnInit(): void {
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
          })
        }
      }
        
        })
  }


}
