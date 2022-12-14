import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  Cartexist: boolean = true;
  constructor() {}

  ngOnInit(): void {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
      this.Cartexist = true;
    } else {
      this.Cartexist = false;
    }
  }
}
