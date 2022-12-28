import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Product } from 'src/app/shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductManageService {
 baseApiUrl = 'https://localhost:7254/api/products';

  constructor(private http: HttpClient) { }

  addProduct(addCustomerRequest: Product): Observable<Product> {

    addCustomerRequest.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Product>(this.baseApiUrl,addCustomerRequest);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(this.baseApiUrl + '/' + id);

  }

  updateProduct(id: string, updateProductRequest: Product ):  Observable<Product>{
   return this.http.put<Product>(this.baseApiUrl + '/' + id, updateProductRequest);
  }

  deleteProduct(id: string):  Observable<Product>{
    return this.http.delete<Product>(this.baseApiUrl + '/' + id);
   }
}
