import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/api/user';

  async register(user: any) {
    const response = await axios.post(`${this.apiUrl}/register`, user);
    return response.data;
  }

  async login(user: any) {
    const response = await axios.post(`${this.apiUrl}/login`, user);
    return response.data;
  }
}
