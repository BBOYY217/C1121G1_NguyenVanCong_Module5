import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';



const routes: Routes = [
  {
    path: 'list-product',
    component: ListProductComponent
  }, {
    path: 'create-product',
    component: CreateProductComponent
  }, {
    path: 'edit-product/:id',
    component: EditProductComponent
  }, {
    path: 'delete-product/:id',
    component: DeleteProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
