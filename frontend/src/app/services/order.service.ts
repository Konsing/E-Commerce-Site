import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:5000/api/orders';

  async createOrder(order: any) {
    const response = await axios.post(this.apiUrl, order);
    return response.data;
  }
}
