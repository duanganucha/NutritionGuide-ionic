// services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../pages/cart/cart.page';
import { Ingredient } from './cart-service.service';

export interface RecordData {
  orderDate: string;
  orderNumber: string;
  userData: UserData;
  items: {
    name: string;
    quantity: number;
    sodium: number;
    total: number;
  }[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  // Replace with your Google Apps Script deployment URL
  private apiUrl =
    'https://script.google.com/macros/s/AKfycbw7DX7o1MdINopzZAfklH69P9i92tF2TjvXIsTLjX2iFO-b4S4q2SVoqusIkA9AGDna/exec';

  constructor(private http: HttpClient) {}

  submitOrder(
    cartItems: Ingredient[],
    userData: UserData,
    total: number
  ): Observable<any> {
    const orderData: RecordData = {
      orderDate: new Date().toISOString(),
      orderNumber: this.generateOrderNumber(),
      userData: userData,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity || 1,
        sodium: item.sodium,
        total: item.sodium * (item.quantity || 1),
      })),
      totalAmount: total,
    };

    return this.http.post(this.apiUrl, orderData);
  }

  private generateOrderNumber(): string {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const random = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(3, '0');
    return `ORD${year}${month}${day}${random}`;
  }
}
