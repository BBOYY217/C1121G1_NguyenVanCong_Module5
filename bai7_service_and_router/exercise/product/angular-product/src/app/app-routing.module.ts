import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductRoutingModule} from './product/product-routing.module';


const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ProductRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
