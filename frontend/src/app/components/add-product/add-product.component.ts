// import { Component } from '@angular/core';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-add-product',
//   templateUrl: './add-product.component.html',
//   styleUrls: ['./add-product.component.css']
// })
// export class AddProductComponent {
//   name: string = '';
//   description: string = '';
//   price: number = 0;
//   category: string = '';
//   imageUrl: string = '';

//   constructor(private productService: ProductService) { }

//   async addProduct() {
//     const product = {
//       name: this.name,
//       description: this.description,
//       price: this.price,
//       category: this.category,
//       imageUrl: this.imageUrl
//     };
//     const result = await this.productService.createProduct(product);
//     console.log(result);
//   }
// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor() { }

  addProduct() {
    console.log("Add product attempt");
  }

}

