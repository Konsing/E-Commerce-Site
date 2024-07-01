import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
