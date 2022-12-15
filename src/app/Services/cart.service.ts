import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../Model/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic my-auth-token',
    }),
  };
  constructor(private http: HttpClient) {}
  addCart(cart: any) {
    return this.http.post('https://fakestoreapi.com/carts', cart, this.options);
  }
}
