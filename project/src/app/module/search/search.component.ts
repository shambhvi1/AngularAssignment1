import { Component,Output, EventEmitter  } from '@angular/core';
import { ProductListService } from 'src/app/features/product-list/services/product-list.service';
import { Product } from 'src/app/shared/model/product.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


 _listFilter = '';
  // get listFilter(): string {
  //   return this._listFilter;
  // }
  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   console.log(this._listFilter);
  //   this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  // }
  onSearch(){
    this.searchEvent.emit(this._listFilter);

  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  @Output() searchEvent = new EventEmitter<string>();
  constructor(private productService: ProductListService) { }
  ngOnInit(): void {
    this.productService.getAllproducts().subscribe({
      next: products => {
        this.products= products;
        this.filteredProducts=products;
        }
    })
   
  }
 

  
  
  

}
