import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  getProduct(id: number) {
    return this.productService.findProductById(id).subscribe(product => {
      this.productForm = new FormGroup({
        code: new FormControl(product.code,[Validators.required,Validators.pattern('^KH-\\d{4}$')]),
        name: new FormControl(product.name,[Validators.required,Validators.minLength(3)]),
        price: new FormControl(product.price,[Validators.required,Validators.min(1),Validators.pattern('^[0-9]+$')]),
        date: new FormControl(product.date,Validators.required),
        description: new FormControl(product.description,[Validators.required,Validators.minLength(3)]),
        category: new FormControl(product.category.id,Validators.required)
      });
    });
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/product/list']);
    }, error => {
      console.log(error);
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(categoryList => {
      this.categoryList = categoryList;
    });
  }
}
