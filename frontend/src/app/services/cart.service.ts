import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];

  addItem(item: any) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }

  clearCart() {
    this.items = [];
  }

  removeFromCart(item: any) {
    const index = this.items.findIndex(cartItem => cartItem._id === item._id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

  getCart() {
    return this.items;
  }
}
