import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'Details/:id', component: ProductDetailsComponent },
];

@NgModule({
  declarations: [ProductsComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
})
export class ProductModule {}
