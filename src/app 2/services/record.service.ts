// services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, retry, timeout } from 'rxjs';
import { UserData } from '../pages/cart/cart.page';
import { Ingredient } from './cart-service.service';
import * as moment from 'moment';
import { AngufirestoreService } from './angufirestore.service';

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
  totalSodium: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private apiUrl =
    'https://script.google.com/macros/s/AKfycbwdY4pUK44y3QsABqtCe09QA3sKG9_6pUFyq2ecbqLhfa7sfJzat2tqhXk4bDM8gR8o/exec';

  constructor(
    private http: HttpClient,
    private angufirestore: AngufirestoreService
  ) {}

  submitOrder(cartItems: Ingredient[], userData: UserData, total: number) {
    const orderData: RecordData = {
      orderDate: moment().format('yyyy-MM-DD'),
      orderNumber: this.generateOrderNumber(),
      userData: userData,
      items: cartItems.map((item) => ({
        name: item.name,
        quantity: item.quantity || 1,
        sodium: item.sodium,
        total: item.sodium * (item.quantity || 1),
      })),
      totalSodium: total,
    };

    return this.angufirestore.createById(
      'nurse_nutrition',
      orderData,
      orderData.orderNumber
    );

    // var headers = new HttpHeaders({
    //   'Content-Type': 'text/plain',
    // });

    // const options = {
    //   headers: headers,
    //   withCredentials: false, // Set this to false for Google Apps Script
    // };

    // console.log(orderData);

    // return this.http.post(this.apiUrl, orderData, options);
  }

  private generateOrderNumber(): string {
    const date = moment().format('yyyy-MM-DD-HHmmss');
    return `${date}`;
  }
}
