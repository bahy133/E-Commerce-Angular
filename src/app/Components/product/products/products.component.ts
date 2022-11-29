import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  prdList!: Product[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  constructor(private Prdser: ProductService) {}

  ngOnInit(): void {
    this.getData();
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  }
  getData() {
    this.Prdser.getallProducts().subscribe((data) => {
      this.prdList = data;
    });
  }
}
