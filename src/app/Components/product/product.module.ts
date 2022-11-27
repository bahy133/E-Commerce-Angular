import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
