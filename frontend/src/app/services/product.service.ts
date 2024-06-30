import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  async getProducts() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async getProductById(id: string) {
    const response = await axios.get(`${this.apiUrl}/${id}`);
    return response.data;
  }

  async createProduct(product: any) {
    const response = await axios.post(this.apiUrl, product);
    return response.data;
  }

  async updateProduct(id: string, product: any) {
    const response = await axios.patch(`${this.apiUrl}/${id}`, product);
    return response.data;
  }

  async deleteProduct(id: string) {
    const response = await axios.delete(`${this.apiUrl}/${id}`);
    return response.data;
  }
}
