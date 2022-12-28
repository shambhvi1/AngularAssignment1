import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[] = [];


  addToCart(product: Product) {
    this.items.push(product);
    debugger;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
