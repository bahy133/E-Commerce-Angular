import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  prd!: Product;
  prdId!: number;
  loading: boolean = false;
  err: boolean = false;
  constructor(
    private prdser: ProductService,
    private active: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.loading = true;
    this.prdId = +this.active.snapshot.paramMap.get('id')!;
    console.log(this.prdId);
    this.prdser.getProductById(this.prdId).subscribe(
      (data) => {
        this.prd = data;
        this.loading = false;
        this.err = false;
      },
      (err) => {
        this.loading = false;
        this.toastr.error(`Error ${err.status} `, 'Error Message');
        this.err = true;
      }
    );
  }

  ngOnInit(): void {}
}
