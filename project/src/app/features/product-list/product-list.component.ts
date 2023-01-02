import { AfterViewInit, Component,  ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';
import { ProductListService } from './services/product-list.service';
import { customCurrencyPipe } from '../../shared/pipes/customCurrency.pipe'
import { Router } from '@angular/router';
import { LazyLoadingService } from 'src/app/shared/LazyLoading/lazy-loading.service';
import { CartService } from './services/cart.service';
import { ProductManageFormComponent } from 'src/app/module/product-manage-form/product-manage-form.component';
import { ConfirmationDialogService } from 'src/app/shared/modals/services/confirmation-dialog.service';


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
  modulePath='../../module/product-manage-form/product-manage-form.module';
  moduleName='ProductManageFormModule';

  constructor(private productService: ProductListService,
              private router: Router,
              private lazyLoadService: LazyLoadingService,
              private cartService: CartService,
              private confirmationService: ConfirmationDialogService) { }
 @ViewChild('confirmationDialogContainerRef', {read: ViewContainerRef})
              confirmationDialogContainerRef!: ViewContainerRef;
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
    
  
  openEditForm(product: Product){
    this.lazyLoadService.lazyload(this.manageFormContainerRef,this.modulePath,this.moduleName);
    const compRef = this.manageFormContainerRef.createComponent(ProductManageFormComponent);
    compRef.instance.LoadEditData(product);
     
   

  }
  deleteProduct(id: string){
    const yp= this.confirmationService
    .confirm('Are u sure', 'You want to delete ?', this.confirmationDialogContainerRef);
    debugger;
    yp.then((confirmed) => 
    {
            console.log(confirmed);
            
            if (confirmed)
            {
              this.productService.deleteProduct(id)
              .subscribe({
              next: () => {
              this.router.navigate(['home']);
            }
          });
        }
  })
  }
    
    
  
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  productDetails(product: Product){
    this.router.navigate(['/prodDetail'],{queryParams:  product });
    
  }


  }



  
  
  


