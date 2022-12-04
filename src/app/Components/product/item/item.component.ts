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
  clicked: boolean = false;
  Cartarr: any[] = [];
  itemNum: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Cart() {
    this.clicked = true;
  }
  redirect(id: number) {
    this.router.navigate(['/Products/Details/', id]);
  }
  addNum() {
    this.item.emit({ item: this.data, quantity: this.itemNum });
    this.clicked = false;
  }
}
