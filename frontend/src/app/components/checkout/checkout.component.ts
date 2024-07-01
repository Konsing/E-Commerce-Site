import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: any[] = [];
  total: number = 0;
  message: string = '';

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  checkout() {
    // Implement checkout logic here
    alert('Checkout successful!');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  }

  placeOrder() {
    // Placeholder for order placement logic
    this.message = 'Order placed successfully!';
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
}
