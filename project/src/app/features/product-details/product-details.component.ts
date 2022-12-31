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
  product: Product={
    id: '',
    productName: '',
    productCode: '',
    releaseDate: '',
    price: 0,
    description: '',
    imageUrl: ''
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params: any) => {
          this.product=params;
          console.log(this.product)
    })
  }
          
            
     
  

}
