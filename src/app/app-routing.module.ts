import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Components/layout/layout.component';
import { ProductModule } from './Components/product/product.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'Products',
        pathMatch: 'full',
      },
      {
        path: 'Products',
        loadChildren: () =>
          import('src/app/Components/product/product.module').then(
            (m) => m.ProductModule
          ),
      },
      {
        path: 'Cart',
        loadChildren: () =>
          import('src/app/Components/cart/cart.module').then(
            (m) => m.CartModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
