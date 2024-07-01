import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name: string = '';
  description: string = '';
  price: number = 0;
  category: string = '';
  imageUrl: string = '';
  message: string = '';

  constructor(private productService: ProductService) { }

  addProduct() {
    const product = {
      name: this.name,
      description: this.description,
      price: this.price,
      category: this.category,
      imageUrl: this.imageUrl
    };
    this.productService.createProduct(product).subscribe(
      response => {
        this.message = 'Product added successfully';
      },
      error => {
        this.message = 'Failed to add product';
      }
    );
  }
}
