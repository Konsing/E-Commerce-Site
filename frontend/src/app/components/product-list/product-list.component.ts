// import { Component, OnInit } from '@angular/core';
// import { ProductService } from '../../services/product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })
// export class ProductListComponent implements OnInit {
//   products: any[] = [];

//   constructor(private productService: ProductService) { }

//   async ngOnInit() {
//     this.products = await this.productService.getProducts();
//   }
// }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

