import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonicModule, ModalController } from '@ionic/angular';

@Component({
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-cal-bmi',

  templateUrl: './cal-bmi.page.html',
  styleUrls: ['./cal-bmi.page.scss'],

})
export class CalBmiPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) { }
  ngOnInit(): void {

  }

  weight: number = 0;
  height: number = 0;
  bmi: number = 0;

  calculateBMI() {
    if (this.weight > 0 && this.height > 0) {
      const heightInMeters = this.height / 100;
      this.bmi = this.weight / (heightInMeters * heightInMeters);
    }
  }

  getBMICategory(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "น้ำหนักต่ำกว่าเกณฑ์";
    if (this.bmi < 25) return "น้ำหนักปกติ";
    if (this.bmi < 30) return "น้ำหนักเกิน";
    return "อ้วน";
  }

  getBMIColor(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "primary";
    if (this.bmi < 25) return "success";
    if (this.bmi < 30) return "warning";
    return "danger";
  }

  getCategoryEmoji(): string {
    if (!this.bmi) return "";
    if (this.bmi < 18.5) return "😟";
    if (this.bmi < 25) return "😊";
    if (this.bmi < 30) return "😕";
    return "😟";
  }

  getBMIPercentage(): number {
    if (!this.bmi) return 0;
    return Math.min(Math.max((this.bmi / 40) * 100, 0), 100);
  }

  resetForm() {
    this.weight = 0;
    this.height = 0;
    this.bmi = 0;
  }

  async presentInfoModal() {
    const alert = await this.alertCtrl.create({
      header: 'เกี่ยวกับ BMI',
      message: `ดัชนีมวลกาย (Body Mass Index: BMI) เป็นค่าที่ใช้ประเมินภาวะน้ำหนักเกินและอ้วน
      
การแปลผล BMI สำหรับผู้ใหญ่:
- น้ำหนักต่ำกว่าเกณฑ์: < 18.5
- น้ำหนักปกติ: 18.5 - 24.9
- น้ำหนักเกิน: 25.0 - 29.9
- อ้วน: ≥ 30.0

หมายเหตุ: BMI เป็นเพียงการประเมินเบื้องต้น ควรปรึกษาแพทย์สำหรับการประเมินสุขภาพที่ละเอียดยิ่งขึ้น`,
      buttons: ['ตกลง'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}