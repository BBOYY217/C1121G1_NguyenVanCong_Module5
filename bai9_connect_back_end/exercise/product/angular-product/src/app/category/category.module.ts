import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryDeleteComponent } from './category-delete/category-delete.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CategoryRoutingModule} from "./category-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    CategoryDeleteComponent
  ],
  imports: [
    CategoryRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
})
export class CategoryModule { }
