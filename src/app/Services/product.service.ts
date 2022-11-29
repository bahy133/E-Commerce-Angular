import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  getallProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.link);
  }
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${environment.link}/${id}`);
  }
  addProduct(prd: Product): Observable<Product> {
    return this.http.post<Product>(environment.link, prd, this.options);
  }
  updateProduct(id: number, prd: Product): Observable<Product> {
    return this.http.put<Product>(
      `${environment.link}/${id}`,
      prd,
      this.options
    );
  }
  deletProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.link}/${id}`);
  }
}
