import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() prdList!: Product[];
  @Input() page!: number;
  @Input() count!: number;
  constructor() {}

  ngOnInit(): void {}
}
