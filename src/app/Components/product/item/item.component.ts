import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() data!: Product;
  @Input() page!: number;
  @Input() count!: number;
  @Output() item = new EventEmitter();
  Cartarr: any[] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Cart(event: any) {
    this.item.emit(this.data);
    // console.log(this.prdList.filter((data) => (data.id = id))[0]);
    // localStorage.setItem(
    //   'cart',
    //   JSON.stringify(this.prdList.filter((data) => (data.id = id))[0])
    // );
    // location.reload();
    // console.log(event.value);
  }
  redirect(id: number) {
    this.router.navigate(['/Products/Details/', id]);
  }
}
