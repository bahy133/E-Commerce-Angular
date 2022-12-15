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
  order: boolean = false;
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
    this.total = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      this.total += this.cartItems[i].item.price * this.cartItems[i].quantity;
    }
    this.total = Math.round(this.total * 10) / 10;
  }
  updateTotal(event: any, id: number) {
    this.calcTotal();
    this.cartItems.filter((item) => item.item.id == id)[0].quantity =
      event.target.value;
    this.save();
  }
  save() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.calcTotal();
    this.save();
  }
  increase(index: number) {
    this.cartItems[index].quantity++;
    this.calcTotal();
    this.save();
  }
  decrease(index: number) {
    this.cartItems[index].quantity--;
    this.calcTotal();
    this.save();
  }
  clearCart() {
    localStorage.removeItem('cart');
    this.cartItems = [];
    this.total = 0;
    this.Cartexist = false;
  }
}
