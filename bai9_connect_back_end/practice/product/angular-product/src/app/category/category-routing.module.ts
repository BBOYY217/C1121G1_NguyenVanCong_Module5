import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {ReactiveFormsModule} from '@angular/forms';
import {ListCategoryComponent} from "./list-category/list-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {CategoryRoutingModule} from "./category.module";


@NgModule({
  declarations: [ListCategoryComponent, CreateCategoryComponent, EditCategoryComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
