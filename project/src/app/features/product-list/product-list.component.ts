import { AfterViewInit, Component, ComponentFactoryResolver, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ProductListService } from './services/product-list.service';
import { Currency1Pipe } from '../../shared/pipes/currency.pipe'
import { Router } from '@angular/router';
import { LazyLoadingService } from 'src/app/shared/LazyLoading/lazy-loading.service';
import { CartService } from './services/cart.service';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';


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
  color='white';

  constructor(private productService: ProductListService,
              private router: Router,
              private lazyLoadService: LazyLoadingService,
              private cartService: CartService) { }
  @ViewChild('manageFormContainerRef', {read: ViewContainerRef})
  manageFormContainerRef!: ViewContainerRef;
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
    this.productService.getAllproducts().subscribe({
      next: products => {
        this.products= products;
        this.filteredProducts=products;
        }
    })
  }
  performFilter(filterBy: string) {
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredProducts= this.products.filter((product: Product) =>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1)
     
  }
    
  
  openEditForm(id: string){
    this.lazyLoadService.lazyload(this.manageFormContainerRef);
    const compRef = this.manageFormContainerRef.createComponent(ProductManageFormComponent);
    compRef.instance.LoadEditData(id);
     
   

  }
  deleteProduct(id: string){
    if (confirm("Do you want to save changes?") == true) {
      this.productService.deleteProduct(id)
    .subscribe({
      next: () => {
        this.router.navigate(['home']);
      }
    });
      
  } else {
      alert("delete cancelled");
  }
    
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


  }



  
  
  


