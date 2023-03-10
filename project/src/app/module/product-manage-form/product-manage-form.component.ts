import {Component, ElementRef, AfterViewInit, OnInit, ViewChild, AfterContentInit, ViewContainerRef } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { ProductManageService } from './services/product-manage.service';
import { Product } from 'src/app/shared/model/product.model';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationDialogService } from 'src/app/shared/modals/services/confirmation-dialog.service';
@Component({
  selector: 'app-product-manage-form',
  templateUrl: './product-manage-form.component.html',
  styleUrls: ['./product-manage-form.component.scss']
})
export class ProductManageFormComponent implements AfterViewInit {
  @ViewChild('content') addview !: ElementRef
  @ViewChild('confirmationDialogContainerRef', {read: ViewContainerRef})
              confirmationDialogContainerRef!: ViewContainerRef;
  product: Product = {
    id: '',
    productName: '',
    productCode: '',
    tags: '',
    releaseDate: '',
    price: 0,
    description: '',
    imageUrl: ''

  };
  
  pageTitle= 'Product Manage Form';
  productForm: FormGroup;
  constructor(private modalService: NgbModal,
               private productManageService: ProductManageService,
               private router: Router,
               private route: ActivatedRoute,
               private fb: FormBuilder,
               private confirmationService: ConfirmationDialogService) { 

                this.productForm = this.fb.group({
                  productId: new FormControl(),
                  productName: new FormControl('', Validators.required),
                  productCode: new FormControl('', Validators.required),
                  price: new FormControl(0, Validators.required),
                  productDescription: new FormControl('',Validators.minLength(5)),
                });
               }
   ngAfterViewInit(){

    this.modalService
    .open(this.addview, { ariaLabelledBy: 'modal-basic-title' })
    .result.then((result) => {
    }, (reason) => {
    });

  }
  
   

  
  // getProduct(id: string): void {
  //   this.productManageService.getProduct(id)
  //     .subscribe({
  //       next: (product: Product) => this.displayProduct(product)
  //   });
  // }
  displayProduct(product: Product): void {
    if (this.productForm) {
      this.productForm.reset();
    }
    this.product = product;

    
    if (this.product.id === null) {
      this.pageTitle = 'Add Product';
    } else {
      this.pageTitle = `Edit Product: ${this.product.productName}`;
    }

    
    this.productForm.patchValue({

      productId: this.product.id,
      productName: this.product.productName,
      productCode: this.product.productCode,
      price: this.product.price,
      productDescription: this.product.description,
    });
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      //check state
      if (this.productForm.dirty) {
        //product object from product data model property
        //overwriting any values from the form
        const p = { ...this.product, ...this.productForm.value };

        if (p.id === '') { 
          this.productManageService.addProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
            });
        } else { 
            this.productManageService.updateProduct(p.id,p)
            .subscribe({
              next: () => this.onSaveComplete(),
              
            });
        }
      } else {
        this.onSaveComplete();
      }
    } 
  }
  

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  onSaveComplete(): void {
    // Reset the form to clear the flags
    debugger;
    this.modalService.dismissAll();
    this.confirmationService.confirm('Success', 'Saved Sucessfully',this.confirmationDialogContainerRef)
  .then((confirmed) => {
    if(confirmed== true){

      this.router.navigate(['/products']);
    }
})
    
   
  }
 
  LoadEditData(product: Product) {
    
    this.displayProduct(product);
    }
  

}
