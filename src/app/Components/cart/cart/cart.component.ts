import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from 'src/app/Model/cart';
import { CartService } from 'src/app/Services/cart.service';

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
  cart!: Cart;
  constructor(private cartser: CartService, private toastr: ToastrService) {}

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
  saveCartToApi() {
    let products = this.cartItems.map((items) => {
      return { productId: items.item.id, quantity: items.quantity };
    });
    let model = {
      userId: 6,
      date: new Date(),
      products: products,
    };
    // for (let i = 0; i < this.cartItems.length; i++) {
    //   this.cart.products.push({
    //     productId: this.cartItems[i].item.id,
    //     quantity: this.cartItems[i].quantity,
    //   });
    // }
    this.cartser.addCart(model).subscribe(
      () => {
        this.toastr.success('Saved Successfully');
        this.order = true;
        localStorage.removeItem('cart');
      },
      (err) => {
        this.toastr.error(`Error ${err.status}`, 'Error message');
      }
    );
  }
}
