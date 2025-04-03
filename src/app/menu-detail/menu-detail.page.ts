import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { MenuItem } from '../models/menu.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService, Ingredient } from '../services/cart-service.service';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class MenuDetailPage implements OnInit {
  selectedItem: MenuItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.selectedItem = history.state.selectedItem;
    if (!this.selectedItem) {
      // Programmatically navigate back to menu page if no item selected
      this.router.navigate(['/ingredient']);
    }
  }

  getName(name: any) {
    var a = 'menu/' + name + '.png';
    console.log(a);
    return 'menu/' + name + '.png';
  }
  selectMenu(item: any) {
    console.log(item);
    this.addToCart(item);
  }

  async addToCart(item: any) {
    var newItem: any = {
      id: item.id,
      name: item.name,
      category: item.category,
      sodium: item.nutrition.sodium,
    };

    try {
      console.log(item);
      await this.cartService.addItem(newItem);

      const toast = await this.toastController.create({
        message: `เพิ่ม ${item.name} ลงตะกร้าแล้ว`,
        duration: 2000,
        position: 'bottom',
        color: 'success',
        buttons: [
          {
            text: 'ตกลง',
            role: 'cancel',
          },
        ],
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง',
        duration: 2000,
        position: 'bottom',
        color: 'danger',
      });
      await toast.present();
    }
  }

  addToLocalStorage(item: MenuItem) {
    // Get existing data or initialize an empty array
    const menu: any[] =
      JSON.parse(localStorage.getItem('menu_select') as string) || [];

    let newItem = {
      name: item.name,
      category: item.category,
      calories: item.nutrition.calories,
    };

    // Add new item to array
    menu.push(newItem);

    // Save updated array back to localStorage
    localStorage.setItem('menu_select', JSON.stringify(menu));

    const menu_list: any[] =
      JSON.parse(localStorage.getItem('menu_select') as string) || [];
    console.log(menu_list);
  }

  goCartPage() {
    this.router.navigate(['cart']);
  }
}
