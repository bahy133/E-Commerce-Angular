import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private http: HttpClient) {}
  getCategoriesbyname(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/${name}`
    );
  }
}
