import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';
import { UserData } from '../pages/cart/cart.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.page.html',
  styleUrls: ['./calories.page.scss'],

  imports: [CommonModule, IonicModule, FormsModule],
})
export class CaloriesPage {
  gender: 'male' | 'female' = 'male';
  age: number = 25;
  weight: number = 70;
  height: number = 170;
  activityLevel: number = 1.2;
  activityText = '';
  calories: number = 0;

  userData: UserData | null = null;

  constructor(
    private router: Router,
    private toastController: ToastController
  ) {
    this.loadSavedData();
  }

  private loadSavedData() {
    try {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        this.userData = JSON.parse(savedData);

        this.age = this.userData!.age;
        this.gender = this.userData!.gender;
        this.weight = parseFloat(localStorage.getItem('weight')!);
        this.height = parseFloat(localStorage.getItem('height')!);

        this.userData!.weight = this.weight;
        this.userData!.height = this.height;
      }
    } catch (error) {
      console.error('Load data error:', error);
    }
  }

  calculateCalories() {
    if (this.age && this.weight && this.height) {
      // Harris-Benedict Equation
      let bmr = 0;
      if (this.gender === 'male') {
        bmr =
          88.362 +
          13.397 * this.weight +
          4.799 * this.height -
          5.677 * this.age;
      } else {
        bmr =
          447.593 + 9.247 * this.weight + 3.098 * this.height - 4.33 * this.age;
      }

      console.log(this.activityLevel);
      this.calories = bmr * this.activityLevel;

      if (this.activityLevel == 1.2) {
        this.activityText = '📱 นั่งทำงานตลอดวัน';
      } else if (this.activityLevel == 1.375) {
        this.activityText = '🚶 ออกกำลังกายเบาๆ 1-3 วัน/สัปดาห์';
      } else if (this.activityLevel == 1.55) {
        this.activityText = '🏃 ออกกำลังกายปานกลาง 3-5 วัน/สัปดาห์';
      } else if (this.activityLevel == 1.725) {
        this.activityText = '💪 ออกกำลังกายหนัก 6-7 วัน/สัปดาห์';
      } else {
        this.activityText = '';
      }
    }
  }

  async saveCalories() {
    localStorage.setItem('calories', this.calories.toFixed(2));

    this.userData!.calories = this.calories;
    this.userData!.activity = this.activityLevel;
    this.userData!.activityText = this.activityText;
    localStorage.setItem('userData', JSON.stringify(this.userData));

    await this.showToast('บันทึกข้อมูลสำเร็จ', 'success');
    setTimeout(() => {
      this.router.navigate(['/main-menu']);
    }, 1000);
  }

  private async showToast(
    message: string,
    color: 'success' | 'warning' | 'danger'
  ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: color,
      buttons: [
        {
          text: 'ปิด',
          role: 'cancel',
        },
      ],
    });
    await toast.present();
  }
}
