import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  Cartexist: boolean = true;
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
      this.Cartexist = true;
      this.calcTotal();
    } else {
      this.Cartexist = false;
      this.total = 0;
    }
  }
  calcTotal() {
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].item.price * this.cartItems[i].quantity;
    }
  }
}
