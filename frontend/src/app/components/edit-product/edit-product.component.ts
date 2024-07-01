import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product: any = {};
  message: string = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProduct(this.route.snapshot.paramMap.get('id'));
  }

  getProduct(id: string | null) {
    if (id) {
      this.productService.getProductById(id).subscribe(
        data => {
          this.product = data;
        },
        error => {
          this.message = error.error.message;
        }
      );
    }
  }

  editProduct() {
    this.productService.updateProduct(this.product._id, this.product).subscribe(
      response => {
        this.message = 'Product updated successfully!';
        this.router.navigate(['/']); // Navigate to the product list after successful update
      },
      error => {
        this.message = error.error.message;
      }
    );
  }
}
