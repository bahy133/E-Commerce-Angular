import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categories } from 'src/app/Model/categories';
import { Product } from 'src/app/Model/product';
import { CatService } from 'src/app/Services/cat.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  value!: string;
  prdList!: Product[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  catList!: Categories[];
  loading: boolean = false;
  Categories!: string[];
  cartItems: any[] = [];
  constructor(
    private Prdser: ProductService,
    private toastr: ToastrService,
    private catser: CatService
  ) {}

  ngOnInit(): void {
    this.value = '0';
    this.getData();
    this.catser.getallCat().subscribe((data) => {
      this.Categories = data;
    });
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.getData();
  }
  getData() {
    this.loading = true;
    if (this.value == '0') {
      this.Prdser.getallProducts().subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    } else if (this.value == '1') {
      this.catser.getCategoriesbyname('electronics').subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    } else if (this.value == '2') {
      this.catser.getCategoriesbyname('jewelery').subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    } else if (this.value == '3') {
      this.catser.getCategoriesbyname(`men's clothing`).subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    } else if (this.value == '4') {
      this.catser.getCategoriesbyname(`women's clothing`).subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    }
  }
  changeCat(event: any) {
    if (event.target.value == '0') {
      this.value = '0';
      this.Prdser.getallProducts().subscribe(
        (data) => {
          this.prdList = data;
          this.loading = false;
          this.toastr.success('Data loaded Successfully');
          this.page = 1;
        },
        (err) => {
          this.loading = false;
          this.toastr.error('Error ' + err.status);
        }
      );
    } else if (event.target.value == '1') {
      this.value = '1';
      this.catser.getCategoriesbyname('electronics').subscribe((data) => {
        this.prdList = data;
        this.loading = false;
        this.toastr.success('Data loaded Successfully');
        this.page = 1;
      });
    } else if (event.target.value == '2') {
      this.value = '2';
      this.catser.getCategoriesbyname('jewelery').subscribe((data) => {
        this.prdList = data;
        this.loading = false;
        this.toastr.success('Data loaded Successfully');
        this.page = 1;
      });
    } else if (event.target.value == '3') {
      this.value = '3';
      this.catser.getCategoriesbyname(`men's clothing`).subscribe((data) => {
        this.prdList = data;
        this.loading = false;
        this.toastr.success('Data loaded Successfully');
        this.page = 1;
      });
    } else if (event.target.value == '4') {
      this.value = '4';
      this.catser.getCategoriesbyname(`women's clothing`).subscribe((data) => {
        this.prdList = data;
        this.loading = false;
        this.toastr.success('Data loaded Successfully');
        this.page = 1;
      });
    }
  }
  addToCart(event: any) {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!);
      let exist = this.cartItems.find((item) => item.item.id == event.item.id);
      if (exist) {
        this.toastr.error('Product is already in your cart');
      } else {
        this.cartItems.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      }
    } else {
      this.cartItems.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
  }
}
