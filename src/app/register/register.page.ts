import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {
  ToastController,
  LoadingController,
  IonicModule,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface UserData {
  firstName: string;
  lastName: string;
  idCard: string;
  gender: string;
  age: number;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  imports: [CommonModule, IonicModule, FormsModule],
})
export class RegisterPage implements OnInit {
  userData: UserData = {
    firstName: '',
    lastName: '',
    idCard: '',
    gender: '',
    age: 0,
  };

  constructor(
    private toastController: ToastController,
    private loadingController: LoadingController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSavedData();
  }

  // Thai ID card validation
  validateThaiID(id: string): boolean {
    if (!id) return false;
    if (id.length !== 13) return false;

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(id[i]) * (13 - i);
    }

    let checkDigit = (11 - (sum % 11)) % 10;
    return checkDigit === parseInt(id[12]);
  }

  async onSubmit(form: NgForm) {
    console.log(this.userData);
    if (!form.valid) {
      await this.showToast('กรุณากรอกข้อมูลให้ครบถ้วน', 'warning');
      return;
    }

    // Validate Thai ID
    if (!this.validateThaiID(this.userData.idCard)) {
      await this.showToast('เลขบัตรประชาชนไม่ถูกต้อง', 'warning');
      return;
    }

    const loading = await this.loadingController.create({
      message: 'กำลังบันทึกข้อมูล...',
    });
    await loading.present();

    try {
      // Save to localStorage
      localStorage.setItem('userData', JSON.stringify(this.userData));

      await loading.dismiss();
      await this.showToast('บันทึกข้อมูลสำเร็จ', 'success');

      setTimeout(() => {
        this.menuPage();
      }, 2000);

      // Optional: Navigate to next page
      // this.router.navigate(['/home']);
    } catch (error) {
      await loading.dismiss();
      await this.showToast('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง', 'danger');
      console.error('Save error:', error);
    }
  }

  menuPage() {
    // Navigate to welcome page after login
    this.router.navigate(['/main-menu']);
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

  private loadSavedData() {
    try {
      const savedData = localStorage.getItem('userData');
      if (savedData) {
        this.userData = JSON.parse(savedData);
      }
    } catch (error) {
      console.error('Load data error:', error);
    }
  }

  async clearForm(form: NgForm) {
    this.userData = {
      firstName: '',
      lastName: '',
      idCard: '',
      gender: '',
      age: 0,
    };
    form.resetForm();
    localStorage.removeItem('userData');
    await this.showToast('ล้างข้อมูลเรียบร้อย', 'success');
  }
}
