import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {ReactiveFormsModule} from '@angular/forms';
import {ListProductComponent} from './list-product/list-product.component';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {DeleteProductComponent} from './delete-product/delete-product.component';
import {ProductRoutingModule} from './product-routing.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    ProductRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],

})
export class ProductModule {
}
