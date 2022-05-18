import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm = new FormGroup({
    id: new FormControl(),
    code: new FormControl('',[Validators.required,Validators.pattern('^KH-\\d{4}$')]),
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl('',[Validators.required,Validators.min(1),Validators.pattern('^[0-9]+$')]),
    date: new FormControl('',Validators.required),
    description: new FormControl('',[Validators.required,Validators.minLength(3)]),
    category: new FormControl("",Validators.required)
  });

  categoryList: Category[] = [];

  constructor(private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategory();
  }

  saveProduct() {
    const product = this.productForm.value;
    product.category = {
      id: product.category
    };
    this.productService.saveProduct(product).subscribe(() => {
      this.productForm.reset();
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
