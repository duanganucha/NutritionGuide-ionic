// cart.page.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  AlertController,
  IonicModule,
  LoadingController,
} from '@ionic/angular';
import { CartService, Ingredient } from 'src/app/services/cart-service.service';
import { RecordService } from 'src/app/services/record.service';

export interface UserData {
  firstName: string;
  lastName: string;
  idCard: string;
  gender: 'male' | 'female';
  age: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class CartPage implements OnInit {
  cartItems: Ingredient[] = [];
  total: number = 0;
  userData: UserData | null = null;

  constructor(
    private cartService: CartService,
    private alertController: AlertController,
    private recordService: RecordService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
      this.calculateTotal();
    });
    this.loadUserData();
  }

  loadUserData() {
    const userDataStr = localStorage.getItem('userData');
    if (userDataStr) {
      try {
        this.userData = JSON.parse(userDataStr);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }

  calculateTotal() {
    console.log(this.cartItems);
    this.total = this.cartItems.reduce((sum, item) => {
      return sum + item.sodium * (item.quantity || 1);
    }, 0);
  }

  sumSodium(quantity: number, sodium: number) {
    return quantity * sodium;
  }

  async updateQuantity(item: Ingredient, isIncrement: boolean) {
    const currentQty = item.quantity || 1;
    const newQty = isIncrement ? currentQty + 1 : currentQty - 1;

    if (newQty <= 0) {
      const alert = await this.alertController.create({
        header: 'ลบรายการ',
        message: `ต้องการลบ ${item.name} ออกจากตะกร้าหรือไม่?`,
        buttons: [
          {
            text: 'ยกเลิก',
            role: 'cancel',
          },
          {
            text: 'ลบ',
            handler: () => {
              this.cartService.removeItem(item.id);
            },
          },
        ],
      });
      await alert.present();
    } else {
      this.cartService.updateItemQuantity(item.id, newQty);
    }
  }

  async clearCart() {
    const alert = await this.alertController.create({
      header: 'ล้างตะกร้า',
      message: 'ต้องการล้างรายการทั้งหมดในตะกร้าหรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ล้างตะกร้า',
          handler: () => {
            this.cartService.clearCart();
          },
        },
      ],
    });
    await alert.present();
  }

  async submitOrder() {
    if (!this.userData) {
      const alert = await this.alertController.create({
        header: 'ข้อผิดพลาด',
        message: 'ไม่พบข้อมูลผู้สั่งซื้อ กรุณาเข้าสู่ระบบ',
        buttons: ['ตกลง'],
      });
      await alert.present();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'กำลังดำเนินการสั่งซื้อ...',
    });
    await loading.present();

    try {
      const response = await this.recordService
        .submitOrder(this.cartItems, this.userData, this.total)
        .toPromise();

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'สำเร็จ',
        message: `การสั่งซื้อเสร็จสมบูรณ์\nเลขที่คำสั่งซื้อ: ${response.orderNumber}`,
        buttons: [
          {
            text: 'ตกลง',
            handler: () => {
              this.cartService.clearCart();
              // this.router.navigate(['/orders']);
            },
          },
        ],
      });
      await alert.present();
    } catch (error) {
      await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'ข้อผิดพลาด',
        message: 'เกิดข้อผิดพลาดในการสั่งซื้อ กรุณาลองใหม่อีกครั้ง',
        buttons: ['ตกลง'],
      });
      await alert.present();
    }
  }
}
