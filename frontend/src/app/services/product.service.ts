// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private apiUrl = 'http://localhost:5000/api/products';

//   constructor(private http: HttpClient) { }

//   getProducts(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }

//   getProductById(id: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }

//   createProduct(product: any): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//         'Authorization': `Bearer ${token}`
//     });
//     console.log('Token:', token);
//     console.log('Headers:', headers);
//     console.log('Sending product:', product);
//     return this.http.post<any>(this.apiUrl, product, { headers }).pipe(
//         tap((response: any) => console.log('Product created:', response)),
//         catchError(this.handleError<any>('createProduct'))
//     );
//   }

//   updateProduct(id: string, product: any): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
//     return this.http.put<any>(`${this.apiUrl}/${id}`, product, { headers }).pipe(
//       tap((response: any) => console.log('Product updated:', response)),
//       catchError(this.handleError<any>('updateProduct'))
//     );
//   }

//   deleteProduct(id: string): Observable<any> {
//     const token = localStorage.getItem('token');
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
//     return this.http.delete<any>(`${this.apiUrl}/${id}`, { headers }).pipe(
//       tap((response: any) => console.log('Product deleted:', response)),
//       catchError(this.handleError<any>('deleteProduct'))
//     );
//   }

//   private handleError<T>(operation = 'operation', result?: T) {
//     return (error: any): Observable<T> => {
//       console.error(`${operation} failed: ${error.message}`);
//       return throwError(error);
//     };
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:5000/api/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createProduct(product: any): Observable<any> {
    console.log('Sending product to backend:', product);
    return this.http.post<any>(this.apiUrl, product);
  }

  updateProduct(id: string, product: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

