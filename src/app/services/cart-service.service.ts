import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Ingredient {
  id: number;
  name: string;
  weight: number;
  sodium: number;
  iconType: string;

  quantity?: number;
  category: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = new BehaviorSubject<Ingredient[]>([]);

  constructor() {}

  async addItem(item: Ingredient) {
    const currentItems = this.cartItems.value;
    const existingItem = currentItems.find((i) => i.id === item.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
      this.cartItems.next([...currentItems]);
    } else {
      this.cartItems.next([...currentItems, { ...item, quantity: 1 }]);
    }
  }

  getCartItems() {
    return this.cartItems.asObservable();
  }
  updateItemQuantity(itemId: number, quantity: number) {
    const currentItems = this.cartItems.value;
    const updatedItems = currentItems.map((item) =>
      item.id === itemId ? { ...item, quantity } : item
    );
    this.cartItems.next(updatedItems);
  }

  removeItem(itemId: number) {
    const currentItems = this.cartItems.value;
    this.cartItems.next(currentItems.filter((item) => item.id !== itemId));
  }

  clearCart() {
    this.cartItems.next([]);
  }
}
