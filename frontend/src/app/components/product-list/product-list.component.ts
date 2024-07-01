import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';
  isLoggedIn = false;

  constructor(
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });

    this.isLoggedIn = this.authService.isLoggedIn();
  }

  filterProducts(): void {
    this.filteredProducts = this.products.filter(product => 
      product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  deleteProduct(productId: string): void {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.filteredProducts = this.filteredProducts.filter(product => product._id !== productId);
    });
  }

  canDeleteProduct(product: any): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const payload = JSON.parse(atob(token.split('.')[1]));
    return product.owner === payload.id;
  }
}
