import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from '../../../shared/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  baseApiUrl='https://localhost:7254/api/Products';

  constructor(private http: HttpClient) { }

  getAllproducts(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseApiUrl)

  }
}
