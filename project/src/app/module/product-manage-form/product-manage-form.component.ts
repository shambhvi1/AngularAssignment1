import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ProductManageService } from './services/product-manage.service';
import { Product } from 'src/app/shared/model/product.model';


@Component({
  selector: 'app-product-manage-form',
  templateUrl: './product-manage-form.component.html',
  styleUrls: ['./product-manage-form.component.scss']
})
export class ProductManageFormComponent implements OnInit, OnDestroy {
pageTitle='Edit Product';
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 

}
