import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  baseApiUrl='https://localhost:7254/api/products';

  constructor(private http: HttpClient) { }
  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/' + id);

  }
}
